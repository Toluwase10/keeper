//jshint esversion:9
import React, { useEffect, useState } from "react";
import axios from "axios";
import Fab from "@material-ui/core/Fab";
import DoneIcon from "@material-ui/icons/Done";

function NoteEdit(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    //grabs the title and content of the id in question and passes the data to the "note" array
    useEffect(() => {
        axios.get(`/api/notes/${props.match.params._id}`)
            .then(res => setNote(res.data))
            .catch(err => console.log("Error: " + err));
    }, [props]);


    function handleSubmit(event) {
        event.preventDefault();
        if (!note.title || !note.content) {
            alert("'Title' or 'Content' cannot be blank");
        } else {
            axios.patch(`/api/notes/${props.match.params._id}`, note) //sends data to the API patch endpoint
                .then(props.history.push(`/notes/${note._id}`)) //redirects to the note info page
                .catch(err => console.log("Error: " + err));
        }

    }


    function handleChange(event) {
        const {name, value} = event.target;
        setNote({...note, [name]: value});
    }


    return(
        <div>
            <h2 style={{textAlign:"center"}}>
            Edit "{note.title}"
            <a href="/notes" id="topRight">return</a>
            </h2>
            <form className="create-note">
            <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>
            <textarea name="content" placeholder="Take a note..." rows= "3" onChange={handleChange} value={note.content}/>
            <Fab  onClick={handleSubmit}> <DoneIcon /></Fab>
           
        </form>
        </div>
    );
}

export default NoteEdit;