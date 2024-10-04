import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Preview from "../pages/Preview";
import { useState } from "react";

const Routing = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup formData={formData} setFormData={setFormData}/>} />
                <Route path="/preview" element={<Preview formData={formData} setFormData={setFormData}/>} />
            </Routes>
        </Router>
    )
}

export default Routing