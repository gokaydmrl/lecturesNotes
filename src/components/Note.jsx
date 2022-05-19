import React from "react";
import GetDate from "./GetDate";

const Note = ({ name, code, lecture }) => {


  return (
    <div className="noteItem">
      
      <p><strong>the name of the course: </strong>{name}</p>
      <p><strong>the code is: </strong>{code}</p>
      <p><strong>this is what i got: </strong>{lecture}</p>
      <GetDate/>
    </div>
  );
};

export default Note;