import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { RootState } from "../Storage/Redux/store";
import { userModel } from "../Interfaces";

const userMustBeLogged = (WrappedComponent: any) => {
  return (props: any) => {
    const userData: userModel = useSelector(
      (state: RootState) => state.userAuthStore
    );

    if (!userData.Id) {
      // if user data is not present
      window.location.replace("/login");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default userMustBeLogged;
