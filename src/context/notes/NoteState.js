import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "6468cdd01c92fac8ec04a52b",
            "user": "64688e772ac9c3207b21ec40",
            "title": "Daily",
            "description": "Daily practice coding on React",
            "tag": "Personal",
            "date": "2023-05-20T13:40:32.456Z",
            "__v": 0
          },
          {
            "_id": "6468cdd01c92fac8ec04a52d",
            "user": "64688e772ac9c3207b21ec40",
            "title": "Daily 2",
            "description": "Daily practice coding on Python",
            "tag": "Personal",
            "date": "2023-05-20T13:40:32.650Z",
            "__v": 0
          },
          {
            "_id": "6468cdd01c92fac8ec04a52d",
            "user": "64688e772ac9c3207b21ec40",
            "title": "Daily 2",
            "description": "Daily practice coding on Python",
            "tag": "Personal",
            "date": "2023-05-20T13:40:32.650Z",
            "__v": 0
          },
          {
            "_id": "6468cdd01c92fac8ec04a52d",
            "user": "64688e772ac9c3207b21ec40",
            "title": "Daily 2",
            "description": "Daily practice coding on Python",
            "tag": "Personal",
            "date": "2023-05-20T13:40:32.650Z",
            "__v": 0
          },
          {
            "_id": "6468cdd01c92fac8ec04a52d",
            "user": "64688e772ac9c3207b21ec40",
            "title": "Daily 2",
            "description": "Daily practice coding on Python",
            "tag": "Personal",
            "date": "2023-05-20T13:40:32.650Z",
            "__v": 0
          },
          {
            "_id": "6468cdd01c92fac8ec04a52d",
            "user": "64688e772ac9c3207b21ec40",
            "title": "Daily 2",
            "description": "Daily practice coding on Python",
            "tag": "Personal",
            "date": "2023-05-20T13:40:32.650Z",
            "__v": 0
          }
    ]
       
   const [notes, setNotes] = useState(notesInitial);

  return (
    <noteContext.Provider value={{notes, setNotes}}>{props.children}</noteContext.Provider>
  );
};

export default NoteState;
