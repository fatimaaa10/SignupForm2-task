import React from 'react';
import SignupForm from '../components/Form';

const Signup = ({formData, setFormData}) => {

    return (
        <SignupForm formData={formData} setFormData={setFormData}/>
    )
}

export default Signup