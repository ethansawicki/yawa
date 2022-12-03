import { Navigate, useLocation } from "react-router-dom";
import { YawaVisitorView } from "../../YawaVisitorView";

export const Authorized = ({ children }) => {
  const location = useLocation();

  if (localStorage.getItem("capstone_user")) {
    return children;
  } else {
    return <YawaVisitorView />
  }
};