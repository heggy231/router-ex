import React from "react";
import { 
  useHistory, 
  Redirect,
} from "react-router";

const Protected = (props) => {
  const  history = useHistory();

  return !props.isLoggedIn ? <Redirect to="/" /> : (
    <>
      {props.children}
    </>
  )
  
};

export default Protected;
