import { YawaVisitorView } from "../../YawaVisitorView";

export const Authorized = ({ children, successfulLogIn }) => {
  if (localStorage.getItem("capstone_user")) {
    return children;
  } else {
    return <YawaVisitorView successfulLogIn={successfulLogIn} />
  }
};