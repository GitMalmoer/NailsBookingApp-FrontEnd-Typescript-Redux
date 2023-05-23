import React, { useEffect, useState } from "react";

import unknownProfile from "../../Assets/unknownprofile.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../Storage/Redux/store";
import { useNavigate } from "react-router-dom";
import { userModel } from "../../Interfaces";
import { useChangeProfilePicMutation, useGetProfilePicQuery } from "../../API/authApi";
import apiResponse from "../../Interfaces/apiResponse";
import AvatarModal from "../../Components/Profile/AvatarModal";

function Profile() {
  const userData: userModel = useSelector(
    (state: RootState) => state.userAuthStore
  );
  const navigate = useNavigate();
  const profilePicQuery = useGetProfilePicQuery(userData.Id);
  const [avatar,setAvatar] = useState(unknownProfile);

  
  const fullName = userData.Name + " " + userData.LastName;

  useEffect(() => {
    if (!userData || !userData.Id) {
      navigate("/login");
    }
  }, [userData]);


  useEffect(() => {
    if(profilePicQuery.data && !profilePicQuery.isLoading)
    {
      setAvatar(profilePicQuery?.data?.result);
    }

  },[profilePicQuery.data])



  return (
    <div className=" py-4" style={{ background: "#F2F6FA" }}>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card panel-default">
            <div className="card-body">
              <div className="text-center">
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                  src={avatar}
                  alt="car-key"
                ></img>

                <div className="d-flex justify-content-center">
                  {/* <a onClick={() => ProfilePicChange()} className="badge text-bg-primary mt-1" style={{textDecoration:"none"}}>
                    Change Profile Picture
                  </a> */}
                  <AvatarModal userDataId = {userData.Id}/>
                </div>

                <h2 className="text-center">{fullName}</h2>

                <p>Email : {userData.Email}</p>
                <p>Confirmed Email : {userData.ConfirmedEmail}</p>

                  <div className="p-1">
                    <button
                      className="btn btn-primary form-control w-50"
                      type="submit"
                      onClick={() => navigate("/changepassword")}
                    >
                      Change Password
                    </button>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
