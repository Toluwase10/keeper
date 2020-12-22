//jshint esversion:6

const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    content: {
        type: String,
        required: [true, "Content can't be blank"]
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Note", noteSchema);