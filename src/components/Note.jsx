import React from "react";
import GetDate from "./GetDate";

const Note = ({ name, code, lecture, notes, id, setNotes }) => {
  const deleteNote = (id) => {
    const newNotes = notes.filter((item, index) => {
      return index !== id;
    });
    setNotes(newNotes);
  };

  return (
    <div className="noteItem">
      <p>
        <strong>the name of the course: </strong>
        {name}
      </p>
      <p>
        <strong>the code is: </strong>
        {code}
      </p>
      <p>
        <strong>this is what i got: </strong>
        {lecture}
      </p>
      <button onClick={deleteNote}>oops</button>
      <GetDate />
    </div>
  );
};

export default Note;
