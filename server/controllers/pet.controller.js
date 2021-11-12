const {Pet} = require("../models/pet.model")

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(pet => {
            console.log(pet)
            res.json(pet)
        })
        .catch(err => res.status(400).json(err))
}

module.exports.getPet = (req, res) => {
    Pet.find({_id: req.params.id})
        .then(pet => {
            console.log(pet)
            res.json(pet)
        })
        .catch(err => console.log("Error getting one pet! ", err))
}

module.exports.getAllPets = (req, res) => {
    Pet.find({})
        .then(pets => {
            console.log(pets)
            res.json(pets)
        })
        .catch(err => console.log("Error getting all pets! ", err))
}

module.exports.updatePet = (req, res) => {
    Pet.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedPet => {
            console.log(updatedPet)
            res.json(updatedPet)
        })
        .catch(err => res.status(400).json(err))
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(deletedPet => {
            console.log(deletedPet)
            res.json(deletedPet)
        })
        .catch(err => console.log("Error deleting pet! ", err))
}