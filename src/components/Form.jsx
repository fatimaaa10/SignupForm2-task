import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import InputField from "./InputField";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import '../styles/Form.css';

const SignupForm = ({formData, setFormData}) => {

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    // useEffect(<FUNCTION>, <DEPENDECY>)


    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData ({
            ...formData,
            [name] : value
        })
        setErrors({
            ...errors,
            [name]: ""
        })
    }

    const handleToggle = () => {
        setType(type === 'password' ? 'text' : 'password');
        setIcon(type === 'password' ? eye : eyeOff);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateForm(formData);
        if(Object.keys(newErrors).length === 0) {
            console.log(formData)
            navigate('/preview')
        } else {
            setErrors(newErrors)
        }
    }

    const validateForm = (data) => {
        const errors = {};
        const nameRegex =  "^[A-Za-z][A-Za-z0-9_]{7,29}$";
        const emailRegex = "^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!data.username.trim()){
            errors.username = 'Username is required'
        } else if (!data.username.match(nameRegex)) {
            errors.username = 'Invalid username format: should be alphnumeric'
        }

        if(!data.email.trim()){
            errors.email = 'Email is required'
        } else if (!data.email.match(emailRegex)) {
            errors.email = 'Invalid email address format'
        }

        if(!data.password){
            errors.password = 'Password is required'
        } else if (!passRegex.test(data.password)) {
            errors.password = 'Password must contain: Minimum 8 characters, 1 uppercase character, 1 lowercase character, at least 1 digit, at least 1 special character'
        }
        return errors;
        
    }

    return (
        <div className="form-container">
            <h1>Sign Up</h1>
            <form className="signup-form">
                <div className="input-field-container">
                    <InputField
                        id="username"
                        label="Username"
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        onChange={handleChange}
                        value={formData.username}
                        />
                        {errors.username && (
                        <span className="error-message" style={{color:'red'}}>
                            {errors.username} </span> )}
                </div>

                <div className="input-field-container">
                    <InputField
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    value={formData.email}
                    />
                    {errors.email && (
                        <span className="error-message" style={{color:'red'}}>
                            {errors.email} </span> )}                    
                </div>

                <div className="input-field-container">
                    <InputField
                    id="password"
                    label="Password"
                    type={type}
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    value={formData.password}
                    />
                    {errors.password && (
                        <span className="error-message" style={{color:'red'}}>
                            {errors.password} </span> )}

                <span className="eye-icon" onClick={handleToggle}>
                    <Icon icon={icon} size={20}/>
                </span>
                </div> 

                <Button onClick={handleSubmit} type="submit" />  

            </form>
        </div>
    )   
}

export default SignupForm
           

    

                   

  