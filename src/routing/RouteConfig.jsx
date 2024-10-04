import Signup from "../pages/Signup";
import Preview from "../pages/Preview";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Routing = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Signup formData={formData} setFormData={setFormData}/>
        },
        {
            path: '/preview',
            element: <Preview formData={formData} setFormData={setFormData}/>
        }
    ]);

    return (
        <RouterProvider router={router}/>
    )
}

export default Routing