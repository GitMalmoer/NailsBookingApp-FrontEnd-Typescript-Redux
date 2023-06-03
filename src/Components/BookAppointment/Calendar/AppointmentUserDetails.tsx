import React from 'react'
import { useInitiatePaymentMutation } from '../../../API/bookingApi';
import apiResponse from '../../../Interfaces/apiResponse';

interface props{
    pickedTime : string, 
    selectedDate : Date,
    selectedDateString: string,
    userInput : any, 
    setPickedTime : React.Dispatch<React.SetStateAction<string>>;
    setCollapse:React.Dispatch<React.SetStateAction<boolean>>;
    handleUserInput: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    setIsPaying: React.Dispatch<React.SetStateAction<boolean>>;
    setClientSecret: React.Dispatch<React.SetStateAction<string>>;
    setStripePaymentIntentId :React.Dispatch<React.SetStateAction<string>>;
    setPrice : React.Dispatch<React.SetStateAction<string>>;
}

function AppointmentUserDetails(props : props) {
    const {
      userInput,
      pickedTime,
      selectedDate,
      selectedDateString,
      setPickedTime,
      setCollapse,
      setIsPaying,
      setClientSecret,
      setStripePaymentIntentId,
      setPrice,
    } = props;
    
    const [initiatePayment] = useInitiatePaymentMutation();
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
    
        const response: apiResponse = await initiatePayment(formBody);
    
        if (response.data?.isSuccess) {
          setClientSecret(response.data?.result?.clientSecret ?? "");
          setStripePaymentIntentId(response.data?.result?.stripePaymentIntentId ?? "")
          setPrice(response.data?.result?.price ?? "")
          setIsPaying(true);

          console.log(response);
        } else {
          setIsPaying(false);
          console.log(response);
        }
      }

  return (
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
          Proceed to payment
        </button>
      </div>
    </form>
    {/* END OF SECOND SELECTION */}
    </>
  )
}

export default AppointmentUserDetails