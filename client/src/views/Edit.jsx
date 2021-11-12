import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router'
import {useHistory} from 'react-router-dom'
import Form from '../components/Form';

const Edit = () => {
    const {id} = useParams()
    const [pet, setPet] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState({})
    const history = useHistory()

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                setPet(res.data[0])
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    const updatePet = pet => {
        axios.put(`http://localhost:8000/api/pets/${id}`, pet)
            .then(res => {
                console.log(res)
                history.push(`/pets/${id}`)
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }

    

    return (
        <div>
            <h3>Edit {pet.name}</h3>
            {loaded && <Form onSubmitProp={updatePet} errors={errors} defaultForm={pet}/>}
        </div>
    );
};


export default Edit;