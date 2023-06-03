import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import styles from "./BookingCalendar.module.css";
import { useCreateAppointmentMutation, useGetAvailableTimesQuery } from "../../../API/bookingApi";
import { inputHelper } from "../../../Helper";
import apiResponse from "../../../Interfaces/apiResponse";

function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateString,setSelectedDateString] = useState("");
  const [isCollapsed, setCollapse] = useState(false);
  const [pickedTime, setPickedTime] = useState("");
  const [availableTimes,setAvailableTimes] = useState<string[]>([]);
  const [loadingTimes, setLoadingTimes] = useState(false);
  const [userInput, setUserInput] = useState({
    Name: "",
    LastName: "",
    Email: "",
    Phone: "",
    Service:"1"
  });
  //another way with param name: {stringDate:selectedDateString}
  const getAvailableTimesQuery = useGetAvailableTimesQuery(selectedDateString);
  const [createAppointment] = useCreateAppointmentMutation();

  const handleUserInput = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const tempData = inputHelper(e,userInput);
    setUserInput(tempData);
  }
  useEffect(() => {
    console.log("render");
  },[])

  // useEffect(() => {
  //   console.log(userInput);
  // },[userInput])

  const currentDate: Date = new Date();
  const datemax: Date = new Date(currentDate);
  datemax.setDate(currentDate.getDate() + 7);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // setting available times string array when query data changes
    if (getAvailableTimesQuery.data && !getAvailableTimesQuery.isLoading) {
      if (getAvailableTimesQuery.isSuccess) {
        setAvailableTimes(getAvailableTimesQuery?.data?.result);
      } else {
        console.log(getAvailableTimesQuery?.error);
      }
    }
  }, [getAvailableTimesQuery.data]);
  
  useEffect(() => {
    // refetching data when selection is changed
    const fetchData = async () => {
      await getAvailableTimesQuery.refetch();
    };
    
    fetchData();
  }, [selectedDateString]);

  const handleClickDay = async (date:any) => {
    const selection : Date = date;
    const selectionString :string = selection.toDateString();
    setSelectedDate(date);
    // useeffect is on selectedDataString when this changes we make a call to api
    setSelectedDateString(selectionString);
    console.log("CLICK DAY" + selectedDateString);
    if (!isCollapsed) {
      setCollapse(true);
      if (buttonRef.current !== null) {
        buttonRef.current.click();
      }
    }
  };

  const handlePickedTime = (e: React.MouseEvent<HTMLButtonElement>) => {
    let buttonContent = (e.target as HTMLButtonElement).textContent;

    if (buttonContent != null && buttonContent.length !== 0) {
      setPickedTime(buttonContent);
    }

    console.log(buttonContent);
  };

  const handleConfirmAppointment = async (e : any) => {
    e.preventDefault();

    const formBody = {
      Name:userInput.Name,
      LastName:userInput.LastName,
      Email:userInput.Email,
      Phone:userInput.Phone,
      Date:selectedDateString,
      Time:pickedTime,
      ServiceValue:userInput.Service,
    }

    const response: apiResponse = await createAppointment(formBody);

    if (response.data?.isSuccess) {
      console.log(response);
    } else {
      console.log(response);
    }
  }

  return (
    <div className="row">
      <div
        className={`${
          !isCollapsed
            ? "col-12 col-md-4 offset-md-4"
            : "col-12 col-md-6 offset-md-3"
        }`}
      >
        <div className="shadow card border-muted mb-3">
          <div className="card-header bg-transparent border-muted">
            Book Appointment
          </div>
          <div className="card-body ">
            {!pickedTime ? (
              <>
                {/* FIRST SELECTION */}
                <h5 className="card-title"></h5>
                <div className="card-text">
                  <div className="row">
                    <div
                      className={`${
                        !isCollapsed
                          ? "col-12 col-md-10 offset-1"
                          : "col-12 col-md-5 offset-md-1"
                      }`}
                    >
                      <Calendar
                        className={`${styles.button}`}
                        calendarType="US"
                        minDate={currentDate}
                        defaultActiveStartDate={currentDate}
                        maxDate={datemax}
                        next2Label={null}
                        prev2Label={null}
                        // onChange={onChangeCalendar}
                        value={selectedDate}
                        onClickDay={handleClickDay}
                        data-bs-toggle={"collapse"}
                        data-bs-target="#collapseExample"
                        aria-controls="collapseExample"
                        
                      />
                    </div>

                    <div
                      className={`${
                        isCollapsed ? "col-12 col-md-5" : "col-0"
                      } `}
                    >
                      <div className={`collapse`} id="collapseExample">
                        <div className="card card-body ">
                          <p>
                            {selectedDate.toLocaleDateString("en-US", {
                              weekday: "long",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>

                          {availableTimes && (
                            <>
                              {availableTimes.map((time,index) => {
                                return (
                                  <button
                                    key={index}
                                    style={{ borderRadius: "23px" }}
                                    onClick={(e) => handlePickedTime(e)}
                                    className="btn btn-outline-success my-1"
                                  >
                                    {time}
                                  </button>
                                );
                              })}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END OF FIRST SELECTION */}
              </>
            ) : (
              <>
                {/* SECOND SELECTION */}
                <form onSubmit={(e) => handleConfirmAppointment(e)}>
                  <div className="shadow card text-center mx-auto w-50 m-2 mt-0 ">
                    <div className="card-body ">
                      <p>
                        <i className="fa-regular fa-calendar"></i> Selected Date
                        : {selectedDate.toLocaleDateString()}
                      </p>
                      <p>
                        <i className="fa-regular fa-clock"></i> Selected Time :{" "}
                        {pickedTime}
                      </p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <input
                      className="form-control me-2 "
                      type="text"
                      name="Name"
                      onChange={(e) => handleUserInput(e)}
                      value={userInput.Name}
                      placeholder="Name"
                      required
                    />
                    <input
                      className="form-control"
                      type="text"
                      onChange={(e) => handleUserInput(e)}
                      name="LastName"
                      value={userInput.LastName}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <input
                    className="form-control my-2"
                    type="text"
                    onChange={(e) => handleUserInput(e)}
                    name="Email"
                    value={userInput.Email}
                    placeholder="Email"
                    required
                  />
                  <input
                    className="form-control my-2"
                    type="text"
                    name="Phone"
                    value={userInput.Phone}
                    onChange={(e) => handleUserInput(e)}
                    placeholder="Phone"
                    required
                  />

                  <select
                    className="form-select"
                    onChange={(e) => handleUserInput(e)}
                    value={userInput.Service}
                    name="Service"
                    aria-label="Default select example"
                    required
                  >
                    <optgroup label="Pick a service">
                      <option value="1">Manicure</option>
                      <option value="2">Manicure Long</option>
                      <option value="3">Three</option>
                    </optgroup>
                  </select>

                  <div className="d-flex justify-content-center mt-2">
                    <button
                      style={{ borderRadius: "23px" }}
                      onClick={() => {
                        setPickedTime("");
                        setCollapse(false);
                      }}
                      className="btn btn-secondary w-50 me-2"
                    >
                      Go Back
                    </button>
                    <button
                      style={{ borderRadius: "23px" }}
                      type="submit"
                      className="btn btn-success w-50 ms-2"
                    >
                      Confirm Appointment
                    </button>
                  </div>
                </form>
                {/* END OF SECOND SELECTION */}
              </>
            )}
          </div>
          <div className="card-footer bg-transparent border-muted">Time: </div>
        </div>
      </div>

      <button
        hidden
        style={{ position: "absolute" }}
        className="btn btn-primary"
        ref={buttonRef}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="true"
        aria-controls="collapseExample"
      >
        Button with data-bs-target
      </button>
    </div>
  );
}

export default BookingCalendar;
