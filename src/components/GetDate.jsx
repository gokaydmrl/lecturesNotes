import React from "react";

const GetDate = ({time}) => {

    const today = new Date().toLocaleDateString()

  return(
  <>
    <p className="time">{today}</p>
  </>
  )
};

export default GetDate;