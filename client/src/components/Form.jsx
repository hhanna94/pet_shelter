import React, {useState} from 'react';

const Form = props => {
    const {onSubmitProp, errors, defaultForm} = props
    const [petInfo, setPetInfo] = useState(defaultForm)

    const handleSubmit = e => {
        e.preventDefault()
        onSubmitProp(petInfo)
    }

    const handleUpdate = e => {
        setPetInfo({...petInfo, [e.target.name]: e.target.value})
    }

    return (
        <div className="mt-4 border p-3">
            <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <div className="d-flex align-items-center mb-3">
                            <label htmlFor="name" className="form-label col-4">Pet Name: </label>
                            <input onChange={handleUpdate} type="text" className="form-control" name="name" id="name" value={petInfo.name}/>
                        </div>
                        {errors.name ? <p className="text-danger">{errors.name.message}</p> : ""}
                        <div className="d-flex align-items-center mb-3">
                            <label htmlFor="type" className="form-label col-4">Pet Type: </label>
                            <input onChange={handleUpdate} type="text" className="form-control" name="type" id="type" value={petInfo.type}/>
                        </div>
                        {errors.type ? <p className="text-danger">{errors.type.message}</p> : ""}
                        <div className="d-flex align-items-center mb-3">
                            <label htmlFor="description" className="form-label col-4">Description: </label>
                            <input onChange={handleUpdate} type="text" className="form-control" name="description" id="description" value={petInfo.description}/>
                        </div>
                        {errors.description ? <p className="text-danger">{errors.description.message}</p> : ""}
                    </div>
                    <div>
                    <div className="d-flex align-items-center mb-3">
                            <label htmlFor="skillOne" className="form-label col-4">Skill One: </label>
                            <input onChange={handleUpdate} type="text" className="form-control" name="skillOne" id="skillOne" value={petInfo.skillOne}/>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <label htmlFor="skillTwo" className="form-label col-4">Skill Two: </label>
                            <input onChange={handleUpdate} type="text" className="form-control" name="skillTwo" id="skillTwo" value={petInfo.skillTwo}/>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <label htmlFor="skillThree" className="form-label col-4">Skill Three: </label>
                            <input onChange={handleUpdate} type="text" className="form-control" name="skillThree" id="skillThree" value={petInfo.skillThree}/>
                        </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
        </div>
    );
};


export default Form;