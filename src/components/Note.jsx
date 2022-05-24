import React from "react";
import GetDate from "./GetDate";

const Note = ({ name, code, lecture, onDelete, id }) => {


  const handleDelete = () => { onDelete(id) }

  return (
    <div className="noteItem">
      
      <p><strong>the name of the course: </strong>{name}</p>
      <p><strong>the code is: </strong>{code}</p>
      <p><strong>this is what i got: </strong>{lecture}</p>
      <button onClick={handleDelete}>oops</button>
      <GetDate/>
    </div>
  );
};

export default Note;