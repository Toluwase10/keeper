//jshint esversion:6
const express = require("express");
const router = express.Router();
const Note = require("../models/note");

//read all notes
router.get("/notes", function (req, res) {
    Note.find({}, function (err, notes) {
        res.json(notes);
    });
});

//read a particular note
router.get('/notes/:id', function(req, res) { 
    Note.findById(req.params.id, function(err, note) {
      if (!note) {
        res.status(404).send("Note could not be found.");
      } else {
        res.json(note);
      }
    });
  });

//create a new note
router.post('/notes', function(req, res) { 
    // console.log(req.body);    
    const newNote = new Note(req.body);

    newNote.save()
        .then((note) => res.send(note))
        .catch(() => res.status(422).send("Note add failed"));
});

//update a particular note
router.patch('/notes/:id', function(req, res){   
  Note.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json("Note updated.");
    })
    .catch(err => {
      res.status(422).send("Note update failed. Error: " + err);
    });
});

//delete a particular note
router.delete('/notes/:id', function(req, res) {  
    Note.findById(req.params.id, function(err, note) {
      if (!note) {
        res.status(404).send("Note not found.");
      } else {
        Note.findByIdAndRemove(req.params.id)
          .then(() => { 
              res.status(200).json("Note deleted."); 
            })
          .catch(err => {
            res.status(400).send("Note delete failed. Error: " + err);
          });
      }
    });
  });


module.exports = router;