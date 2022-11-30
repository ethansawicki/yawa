import { Navigate, useLocation } from "react-router-dom";
import { Unauthorized } from "./Unauthorized";

export const Authorized = ({ children }) => {
  const location = useLocation();

  if (localStorage.getItem("capstone_user")) {
    return children;
  } else {
    return (
      <Unauthorized />
    );
  }
};