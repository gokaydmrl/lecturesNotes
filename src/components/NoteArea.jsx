import React from "react";
import { useState } from "react";
import Note from "./Note";

const NoteArea = ({ onAdd, notes }) => {
  const [lecture, setLecture] = useState({
    name: "",
    code: "",
    lecture: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLecture((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    // property çağırıyoruz as a method
    onAdd(lecture);
    setLecture({
      name: "",
      code: "",
      lecture: ""
    });
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="name" value={lecture.name} placeholder="Course Name"/>
        <input onChange={handleChange} name="code" value={lecture.code} placeholder="Course Code"/>
        <input onChange={handleChange} name="lecture" value={lecture.lecture} placeholder="Your Notes..."/>
        <button>finally ended...</button>
      </form>

       {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            name={note.name}
            code={note.code}
            lecture={note.lecture}
          />
        )
      })}
    </>
  );
};

export default NoteArea;