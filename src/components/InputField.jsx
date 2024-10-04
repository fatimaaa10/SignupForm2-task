import React from 'react';

const InputField = ({ label, id, type, name, placeholder, onChange}) => {
    
    return (
      <div className='input-field'>
        <label>{label}</label>
        <input
          id ={id}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>

    );

}

export default InputField