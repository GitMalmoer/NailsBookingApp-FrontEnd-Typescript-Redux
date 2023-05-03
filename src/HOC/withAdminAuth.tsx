import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { RootState } from "../Storage/Redux/store";
import { userModel } from "../Interfaces";

const withAdminAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const userData: userModel = useSelector(
      (state: RootState) => state.userAuthStore
    );

    if (userData.Id) {
      if (userData.Role != "admin") {
        window.location.replace("/accessDenied");
        return null;
      }
    } else {
      // if user data is not present
      window.location.replace("/login");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAdminAuth;
