const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provide a name."],
        minlength: [3, "Name must be at least 3 characters."],
    },
    type: {
        type: String,
        required: [true, "Must provide a type."],
        minlength: [3, "Type must be at least 3 characters."]
    },
    description: {
        type: String,
        required: [true, "Must provide a description."],
        minlength: [3, "Description must be at least 3 characters."]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    }
},
    {timestamps: true}
);

module.exports.Pet = mongoose.model("Pet", PetSchema)