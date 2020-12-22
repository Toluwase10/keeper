//jshint esversion:6
import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';

function NoteInfo(props){
    const [note, setNote] = useState({});

    //passes the objectID to the GET API for the particular note, receives the data from the backend and passes it to the "note" array
    useEffect(() => {
        axios.get(`/api/notes/${props.match.params._id}`)
          .then(res => setNote(res.data))
          .catch(err => console.log("Error: ", err));
      }, [props]);
    

      //passes the objectID to the DELETE API and redirects to the note list page
    function handleDelete() {
        axios.delete(`/api/notes/${props.match.params._id}`)
            .then(() => {
                props.history.push("/notes");
            })
            .catch(err => {
                console.log("Error: " + err);
            });
    }
    
    return (
        //displays the data from the note array
        <div className="note" >
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <div className="btn-group" style={{textAlign: 'center'}}>
            <Link to={"/notes/" + note._id + "/edit"} className="btn btn-primary" title="Edit Note"><EditIcon /></Link>
            <Link to={"/notes/"} className="btn btn-secondary" title="Go back"><CancelIcon /></Link> 
            <button className="btn btn-danger" onClick={handleDelete} title="Delete Note"> <DeleteIcon /> </button>
            </div>
        </div>
    )
}

export default NoteInfo;