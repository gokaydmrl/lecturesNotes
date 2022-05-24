import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NoteArea from "./components/NoteArea";
import Search from "./components/Search"
import Header from "./components/Header";
import GetDate from "./components/GetDate";


function App() {
  const [notes, setNotes] = useState([]);

  const AddLecture = (newLecture) => {
    setNotes((prevLectures) => {
      return [...prevLectures, newLecture];
    });
  };



  return (
    <div>
      <Header />
      <GetDate />
      <NoteArea onAdd={AddLecture} notes={notes}/>
      
      
    </div>
  );
}

export default App;
