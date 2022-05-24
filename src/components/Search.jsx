import React from "react";
import { useState } from "react";
import Note from "./Note";

const Search = ({ notes, setNotes }) => {
  const [filtered, setFiltered] = useState("");

  const handleChange = (e) => {
    setFiltered(e.target.value);
  };

  const filteredLectures = notes.filter(
    (note) =>
      note.name.toString().toLowerCase().includes(filtered.toLowerCase()) ||
      note.code.toString().toLowerCase().includes(filtered.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="name or course code"
        value={filtered}
        onChange={handleChange}
      />

      {filteredLectures.map((filteredLecture, index) => {
        return (
          <Note
            setNotes={setNotes}
            key={index}
            id={index}
            name={filteredLecture.name}
            code={filteredLecture.code}
            lecture={filteredLecture.lecture}
            notes={notes}
          />
        );
      })}
    </div>
  );
};

export default Search;
