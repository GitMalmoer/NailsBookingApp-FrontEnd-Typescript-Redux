import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import styles from "./BookingCalendar.module.css";
import {
  useCreateAppointmentMutation,
  useGetAvailableTimesQuery,
  useInitiatePaymentMutation,
} from "../../../API/bookingApi";
import { inputHelper } from "../../../Helper";
import apiResponse from "../../../Interfaces/apiResponse";
import AppointmentInputThenPayment from "./AppointmentInputThenPayment";
import Payment from "./Payment";

function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateString, setSelectedDateString] = useState("");
  const [isCollapsed, setCollapse] = useState(false);
  const [pickedTime, setPickedTime] = useState("");
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [loadingTimes, setLoadingTimes] = useState(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [userInput, setUserInput] = useState({
    Name: "",
    LastName: "",
    Email: "",
    Phone: "",
    Service: 1,
  });
  //another way with param name: {stringDate:selectedDateString}
  const getAvailableTimesQuery = useGetAvailableTimesQuery(selectedDateString);

  const handleUserInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  const currentDate: Date = new Date();
  const datemax: Date = new Date(currentDate);
  datemax.setDate(currentDate.getDate() + 7);

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
    setLoadingTimes(true);
    // refetching data when selection is changed
    const fetchData = async () => {
      await getAvailableTimesQuery.refetch();
      setLoadingTimes(false);
    };

    fetchData();
  }, [selectedDateString]);



  const handleClickDay = async (date: any) => {
    const selection: Date = date;
    const selectionString: string = selection.toDateString();
    setSelectedDate(date);
    // useeffect is on selectedDataString when this changes we make a call to api
    setSelectedDateString(selectionString);
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
  };

  return (
    <div className="row">
      <div
        className={`${
          !isCollapsed
            ? "col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4"
            : "col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2"
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
                          ? "col-12 col-md-10 offset-md-1 d-flex justify-content-center align-items-center"
                          : "col-12 col-md-5 offset-md-1 "
                      }`}
                    >
                      <Calendar
                        className={`${styles.calendar}`}
                        calendarType="US"
                        minDate={currentDate}
                        defaultActiveStartDate={currentDate}
                        maxDate={datemax}
                        next2Label={null}
                        prev2Label={null}
                        value={selectedDate}
                        onClickDay={handleClickDay}
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
                          {/* IF IS FETCHING DATA THEN SHOW SPINNER IF NOT THEN LOAD BUTTON TIMES */}
                          {loadingTimes ? (
                            <>
                              <div style={{ height: "200px" }}>
                                <div
                                  className="d-flex justify-content-center align-content-center"
                                  style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                  }}
                                >
                                  <div className="spinner-border text-warning"></div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              {availableTimes && (
                                <>
                                  {availableTimes.map((time, index) => {
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
                <AppointmentInputThenPayment
                  selectedDateString={selectedDateString}
                  selectedDate={selectedDate}
                  setCollapse={setCollapse}
                  setPickedTime={setPickedTime}
                  pickedTime={pickedTime}
                  userInput={userInput}
                  handleUserInput={handleUserInput}
                ></AppointmentInputThenPayment>
                {/* END OF SECOND SELECTION */}
              </>
            )}
          </div>
          <div className="card-footer bg-transparent border-muted">
            {pickedTime
              ? "Pick a service and write contact information."
              : "Select a date and time to book."}{" "}
          </div>
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
