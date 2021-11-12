import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const List = () => {
    const [pets, setPets] = useState([])
    const sortedPets = [...pets].sort( (a, b) => a.type > b.type ? 1 : -1)

    useEffect( () => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="mt-4 border p-3">
            <table className="table table-striped">
                <thead className="bg-secondary text-white fw-bold">
                    <tr>
                        <td>Name</td>
                        <td>Type</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {sortedPets.map( (pet, i) => {
                        return (
                            <tr key={i}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={`/pets/${pet._id}`}>Details</Link> | <Link to={`/pets/${pet._id}/edit`}>Edit</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};


export default List;