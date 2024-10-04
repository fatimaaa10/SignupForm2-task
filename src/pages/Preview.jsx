import React from "react";
import '../styles/Preview.css'

const Preview = ({formData}) => {

    return (
        <div className="preview-container">
            <h2>Form Preview</h2>
            <p><strong>Username:</strong> {formData.username} </p>
            <p><strong>Email:</strong> {formData.email} </p>
            <p><strong>Password:</strong> {formData.password} </p>

        </div>
    )
}

export default Preview