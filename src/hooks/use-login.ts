import { useEffect } from "react";
import { useHistory } from "react-router";
import { useAppSelector } from "./redux-hooks";

export default function () {
  const loggedIn = useAppSelector((value) => value.entities.login.loggedIn);
  const history = useHistory();

  useEffect(() => {
    if (!loggedIn) {
      history.push("/login");
    }
  }, [loggedIn]);

  return { loggedIn };
}
