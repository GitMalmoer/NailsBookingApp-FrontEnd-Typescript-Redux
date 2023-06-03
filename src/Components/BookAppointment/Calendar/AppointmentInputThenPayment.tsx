import React, { useEffect, useRef, useState } from "react";
import { useInitiatePaymentMutation } from "../../../API/bookingApi";
import apiResponse from "../../../Interfaces/apiResponse";
import Payment from "./Payment";

interface props {
  pickedTime: string;
  selectedDate: Date;
  selectedDateString: string;
  userInput: any;
  setPickedTime: React.Dispatch<React.SetStateAction<string>>;
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
  handleUserInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

function AppointmentInputThenPayment(props: props) {
  const {
    userInput,
    pickedTime,
    selectedDate,
    selectedDateString,
    setPickedTime,
    setCollapse,
  } = props;

  const [clientSecret, setClientSecret] = useState("");
  const [stripePaymentIntentId, setStripePaymentIntentId] = useState("");
  const [isPaying, setIsPaying] = useState(false);
  const [initiatePayment] = useInitiatePaymentMutation();
  const [price, setPrice] = useState("");
  const [createAppointmentData, setCreateAppointmentData] = useState({
    Name: "",
    LastName: "",
    Email: "",
    Phone: "",
    Date: "",
    Time: "",
    ServiceValue: "",
    Price:"",
  });
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (!isPaying) {
      setClientSecret("");
      setStripePaymentIntentId("");
      setPrice("");
    }
  }, [isPaying]);


  const handleConfirmAppointment = async (e: any) => {
    e.preventDefault();

    const formBody = {
      Name: userInput.Name,
      LastName: userInput.LastName,
      Email: userInput.Email,
      Phone: userInput.Phone,
      Date: selectedDateString,
      Time: pickedTime,
      ServiceValue: userInput.Service,
    };

    const response: apiResponse = await initiatePayment(formBody);

    if (response.data?.isSuccess) {
      setClientSecret(response.data?.result?.clientSecret ?? "");
      setStripePaymentIntentId(
        response.data?.result?.stripePaymentIntentId ?? ""
      );
      setPrice(response.data?.result?.price ?? "");
      // SETTING UP FORM TO PASS TO PAYMENT
      setCreateAppointmentData({...formBody,Price : response.data?.result?.price ?? ""});
      setIsPaying(true);

      console.log(response);
    } else {
      setIsPaying(false);
      console.log(response);
    }
  };


  const getSelectedOption = () => {
    if (selectRef.current) {
      const selectedOption = selectRef.current.options[selectRef.current.selectedIndex];
      const selectedText = selectedOption.textContent;
      return selectedText;
    }
  }

  return (
    <>
      {isPaying ? (
        <>
          <div className="row ">
            <div className="col-12 col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Details</h5>
                  <p>Selected Date: {selectedDateString}</p>
                  <p>Selected Time: {pickedTime}</p>
                  <p>Email: {userInput?.Email}</p>
                  <p>
                    Name: {userInput?.Name} {userInput?.LastName}
                  </p>
                  <p>Phone: {userInput?.Phone}</p>
                  <p>{getSelectedOption()}</p>
                  <p>Price: {price} SEK</p>

                  <button
                    style={{ borderRadius: "23px" }}
                    onClick={() => setIsPaying(false)}
                    className="btn btn-secondary"
                  >
                    Change Details
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mt-2 mt-md-0 ">
              <Payment
                createAppointmentData={createAppointmentData}
                stripePaymentIntentId={stripePaymentIntentId}
                clientSecret={clientSecret}
              ></Payment>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* SECOND SELECTION */}
          <form onSubmit={(e) => handleConfirmAppointment(e)}>
            <div className="shadow card text-center mx-auto col col-8 col-md-6 mx-auto m-2 mt-0 ">
              <div className="card-body ">
                <p>
                  <i className="fa-regular fa-calendar"></i> Selected Date :{" "}
                  {selectedDate.toLocaleDateString()}
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
                onChange={(e) => props.handleUserInput(e)}
                value={userInput.Name}
                placeholder="Name"
                required
              />
              <input
                className="form-control"
                type="text"
                onChange={(e) => props.handleUserInput(e)}
                name="LastName"
                value={userInput.LastName}
                placeholder="Last Name"
                required
              />
            </div>
            <input
              className="form-control my-2"
              type="text"
              onChange={(e) => props.handleUserInput(e)}
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
              onChange={(e) => props.handleUserInput(e)}
              placeholder="Phone"
              required
            />

            <select
              className="form-select"
              onChange={(e) => props.handleUserInput(e)}
              value={userInput.Service}
              name="Service"
              aria-label="Default select example"
              required
              ref={selectRef}
            >
              <optgroup label="Pick a service">
                <option value="1">
                  Nail extension with regular polish - 400 SEK
                </option>
                <option value="2">Nail extension with shellac - 450 SEK</option>
                <option value="3">
                  Nail reinforcement of natural nails with regular polish - 400
                  SEK
                </option>
                <option value="4">
                  Completion, refill with regular polish - 350 SEK
                </option>
                <option value="5">
                  Pedicure with regular polish - 350 SEK
                </option>
                <option value="6">Nail repair - 100 SEK</option>
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
                Proceed to payment
              </button>
            </div>
          </form>
          {/* END OF SECOND SELECTION */}
        </>
      )}
    </>
  );
}

export default AppointmentInputThenPayment;
