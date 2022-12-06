import { YawaVisitorView } from "../../YawaVisitorView";

export const Authorized = ({ children }) => {
  if (localStorage.getItem("capstone_user")) {
    return children;
  } else {
    return <YawaVisitorView />
  }
};