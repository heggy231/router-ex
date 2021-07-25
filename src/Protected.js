import React from "react";
import { useHistory } from "react-router";

const Protected = (props) => {
  const  history = useHistory();

  if (!props.isLoggedIn) {
    // If not logged in, redirect to login page
    //  component return nothing
    history.push("/");
    return null;
  } else {
    // If logged in, render children Blog component
    return (
      <>
        {props.children}
      </>
    )
  }
};

export default Protected;
