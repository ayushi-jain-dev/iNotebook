import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6468cdd01c92fac8ec04a52b",
      user: "64688e772ac9c3207b21ec40",
      title: "Daily",
      description: "Daily practice coding on React",
      tag: "Personal",
      date: "2023-05-20T13:40:32.456Z",
      __v: 0,
    },
    {
      _id: "6468cdd01c92fac8ec04a52d",
      user: "64688e772ac9c3207b21ec40",
      title: "Daily 2",
      description: "Daily practice coding on Python",
      tag: "Personal",
      date: "2023-05-20T13:40:32.650Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    // TODO: API Call
    console.log("Adding a new note");
    const note = {
      _id: "6468cdd11c92fac8ec04a52f",
      user: "6131dc5e3e4037cd4734a0664",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = (id) => {
    // TODO: API Call
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit a Note
  const editNote = (id, title, description, tag) => {};

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
