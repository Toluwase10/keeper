//jshint esversion:6
import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';


function NoteList(props){
    const [notes, setNotes] = useState([]);


    useEffect(() => {
        axios.get("/api/notes/")
            .then(res => setNotes(res.data))
            .catch(err => console.log(err));
    }, []);

  
    return (
        <div>
        <h2 style={{textAlign:'center'}}>
        Your Notes
        <Link to="/notes/new" className="btn btn-primary float-right">Create Note</Link>
      </h2>

      {notes.map(note => {
          return(
              (note.title && note.content) ? 
              <div className="note" key={note._id}>
                {<h1><Link to={"/notes/" + note._id}>{note.title}</Link></h1>}
                <p>{note.content}</p>
                {/* <Link to={`/notes/${note._id}/edit`} className="editButton"><EditIcon /></Link> 
                {/* <button id="editButton" onClick={handleEdit}> <EditIcon /> </button> */}
                {/* <button className="deleteButton" onClick={handleDelete}> <DeleteIcon /> </button> */}
                {/* <Link to="/notes">Close</Link> */}
              </div>
              : null

          );
      })}
        </div>
    )
}

export default NoteList;