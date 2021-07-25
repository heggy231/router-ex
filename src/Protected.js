import React from "react";
import { useHistory } from "react-router";

const Protected = (props) => {
  const history = useHistory();
  if (!props.isLoggedIn) {
    // if not logged in, redirect using history.push back to home
    history.push("/");
    return null;
  } else {
    // if logged in, show protected blog page
    return (
      <>
        {props.children}
      </>
    )
  }
};

export default Protected;
