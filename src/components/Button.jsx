import React from 'react';
import '../styles/Form.css';

const Button = ({type, onClick}) => {
    
    return (
        <button type={type} className="submit-button" onClick={onClick}>Submit</button>
    )
}

export default Button

