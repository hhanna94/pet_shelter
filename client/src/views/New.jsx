import React, {useState} from 'react';
import Form from '../components/Form';
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const New = () => {
    const [errors, setErrors] = useState({})
    const emptyPet = {
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: ""
    }
    const history = useHistory()

    const createPet = pet => {
        axios.post('http://localhost:8000/api/pets', pet)
            .then(res => {
                console.log(res)
                history.push("/")
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <h3>Know a pet needing a home?</h3>
            <Form onSubmitProp={createPet} errors={errors} defaultForm={emptyPet} />
        </div>
    );
};


export default New;