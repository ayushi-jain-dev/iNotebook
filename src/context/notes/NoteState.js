import React, {useState} from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {

	const host = "http://localhost:3000";
	const notesInitial = [];
	const [notes, setNotes] = useState(notesInitial);

	// Get all Notes
	const getNotes = async () => {
		// API Call

		try {
			const response = await fetch(`${host}/api/notes/fetchallnotes`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'auth-token': localStorage.getItem('token')
				}
			});
			const json = await response.json()

			setNotes(json)

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			// Process the response here
		} catch (error) {
			console.error('Error:', error.message);
		}


	}

	// Add a Note
	const addNote = async (title, description, tag) => {
		// TODO: API Call
		// eslint-disable-next-line
		const response = await fetch(`${host}/api/notes/addnote`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				"auth-token": localStorage.getItem('token')
			},
			body: JSON.stringify({title, description, tag})
		});

		const note = await response.json();
		setNotes(notes.concat(note));
	};

	// Delete a Note
	const deleteNote = async (id) => {
		// API Call
		try {
			const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					"auth-token": localStorage.getItem('token')
				},
			});
			if (!response.ok) {
				throw new Error('Failed to delete note');
			}


			const newNotes = notes.filter((note) => {
				return note._id !== id
			})
			setNotes(newNotes)
		} catch (error) {
			console.log(error);
		}
	};

	// Edit a Note
	// eslint-disable-next-line
	const editNote = async (id, title, description, tag) => {
		// API Call
		const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				"auth-token": localStorage.getItem('token')
			},
			body: JSON.stringify({title, description, tag})
		});
		// eslint-disable-next-line
		const json = await response.json();

		let newNotes = JSON.parse(JSON.stringify(notes))
		// Logic to edit in client
		for (let index = 0; index < notes.length; index++) {
			const element = notes[index];
			if (element._id === id) {
				newNotes[index].title = title;
				newNotes[index].description = description;
				newNotes[index].tag = tag;
				break;
			}

		}
		setNotes(newNotes);
	};

	return (
		<noteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
			{props.children}
		</noteContext.Provider>
	);
}

export default NoteState;
