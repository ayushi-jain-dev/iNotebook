import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {

  const host = "http://localhost:6000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2YTc0N2QyZWY4OGY5N2RkMzUwOGQ2In0sImlhdCI6MTY4NDY5ODIzN30.hWucY01vZyz9DI2iVLc0-OOPYjN1ypbmiY0ITt09_mY"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  // Add a Note
  const addNote = async(title, description, tag) => {
    // TODO: API Call
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2YTc0N2QyZWY4OGY5N2RkMzUwOGQ2In0sImlhdCI6MTY4NDY5ODIzN30.hWucY01vZyz9DI2iVLc0-OOPYjN1ypbmiY0ITt09_mY"
      },
      body: JSON.stringify({title, description, tag})
    });


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
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2YTc0N2QyZWY4OGY5N2RkMzUwOGQ2In0sImlhdCI6MTY4NDY5ODIzN30.hWucY01vZyz9DI2iVLc0-OOPYjN1ypbmiY0ITt09_mY"
      }
    });
    const json = response.json();
    console.log(json)

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // Edit a Note
  // eslint-disable-next-line
  const editNote = async(id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2YTc0N2QyZWY4OGY5N2RkMzUwOGQ2In0sImlhdCI6MTY4NDY5ODIzN30.hWucY01vZyz9DI2iVLc0-OOPYjN1ypbmiY0ITt09_mY"
      },
      body: JSON.stringify({title, description, tag})
    });
    // eslint-disable-next-line
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};
}

export default NoteState;
