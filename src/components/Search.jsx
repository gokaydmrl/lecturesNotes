import React from "react";
import { useState } from "react";

const Search = ({ notes }) => {
  const [filtered, setFiltered] = useState("");

  const handleChange = (e) => {
    setFiltered(e.target.value);
  };

  const filteredLectures = notes.filter((note) => {
    return Object.keys(notes).some(key => notes[key].toString().toLowerCase().includes(filtered.toLowerCase()));
  });

  console.log(filteredLectures);

  return (
    <div>
      <input
        placeholder="search course name or course code"
        value={filtered}
        onChange={handleChange}
      />

      {filteredLectures.map((note) => {
        return (
          <p key={note.index}>{note.name}</p>
        )
      })}
    </div>
  );
};

export default Search;
