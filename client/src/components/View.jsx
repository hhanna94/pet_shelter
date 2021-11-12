import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router'
import axios from 'axios';

const View = () => {
    const { id } = useParams()
    const [pet, setPet] = useState({})
    const history = useHistory()
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => setPet(res.data[0]))
            .catch(err => console.log(err))
    }, [liked])

    const adoptPet = () => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                console.log(res)
                history.push(`/`)
            })
            .catch(err => { console.log(err) })
    }

    // const likePet = () => {
    //     
    //     setLiked(true)
    // }

    const likePet = () => {
        let newLikes = pet.likes+1
        let updatedPet = {
            ...pet,
            likes: newLikes
        }
        axios.put(`http://localhost:8000/api/pets/${id}`, updatedPet)
            .then(res => {
                console.log(res)
                setLiked(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h3>Details about: {pet.name}</h3>
                <button onClick={adoptPet} className="btn btn-danger">Adopt {pet.name}</button>

            </div>
            <div className="border mt-4 p-3">
                <div className="d-flex align-items-start">
                    <p className="col-2 fw-bold">Pet Type:</p>
                    <p>{pet.type}</p>
                </div>
                <div className="d-flex align-items-start">
                    <p className="col-2 fw-bold">Description:</p>
                    <p>{pet.description}</p>
                </div>
                <div className="d-flex align-items-start">
                    <p className="col-2 fw-bold">Skills:</p>
                    <div>
                        {pet.skillOne ? <p>{pet.skillOne}</p> : ""}
                        {pet.skillTwo ? <p>{pet.skillTwo}</p> : ""}
                        {pet.skillThree ? <p>{pet.skillThree}</p> : ""}
                    </div>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    {!liked ? <button onClick={likePet} className="btn btn-success">Like</button> : ""}
                    <label>Likes: {pet.likes}</label>
                </div>
            </div>
        </div>
    );
};


export default View;