//jshint esversion:9
import React, { useState} from 'react';
import  axios  from 'axios';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


function NoteAdd(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setisExpanded] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        if (!note.title) {
            alert("Title is required");
        } 
        else if (!note.content) {
            alert("Content can't be blank");
        } 
        else{
            axios.post("/api/notes", note) //sends data to the API endpoint
                .then(res => props.history.push(`/notes/${res.data._id}`)) //redirects to the note info page
                .catch(err => console.log("Error: " + err));
        }
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setNote({...note, [name]: value});
    }

    function handleClick() {
        setisExpanded(true);
    }


    return (
        <div>
   
        <form className="create-note">
            {isExpanded && <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>}
            <textarea name="content" placeholder="Take a note..." rows= {isExpanded ? 3: 1 } onChange={handleChange} onClick={handleClick} value={note.content}/>
            <Zoom in={true}>
            <Fab 
            onClick={handleSubmit}> 
            <AddIcon />
            </Fab>
            </Zoom> 
        </form>
      
    </div>
    );
}

export default NoteAdd;