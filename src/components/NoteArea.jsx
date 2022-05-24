import React from "react";
import { useState } from "react";
import Note from "./Note";
import Search from "./Search";

const NoteArea = ({ onAdd, notes, setNotes }) => {
  const [lecture, setLecture] = useState({
    name: "",
    code: "",
    lecture: "",
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
    {lecture.name === "" && lecture.code === "" ? false : onAdd(lecture)};
    setLecture({
      name: "",
      code: "",
      lecture: "",
    });
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="name"
          value={lecture.name}
          placeholder="Course Name"
        />
        <input
          onChange={handleChange}
          name="code"
          value={lecture.code}
          placeholder="Course Code"
        />
        <textarea
          onChange={handleChange}
          name="lecture"
          value={lecture.lecture}
          placeholder="Your Notes..."
        />
        <div>
          <button>finally ended...</button>
        </div>
      </form>

      <Search notes={notes} />
    </>
  );
};

export default NoteArea;
