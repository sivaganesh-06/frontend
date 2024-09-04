import React, { useState } from 'react';
import Box from '../components/Box';
import LoginForm from '../components/LoginForm';
import loginimage from '../assets/frontendimage.jpg';

export default function LoginPage() {
    const [Data, setData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' });

    const validateForm = () => {
        const newErrors = { username: '', password: '' };
        let isValid = true;
        if (!Data.username) {
            newErrors.username = 'username is required';
            isValid = false;
        }
        if (!Data.password) {
            newErrors.password = 'password is required';
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        if (validateForm()) {
            console.log('form submitted ', Data);
        } else {
            e.preventDefault();
            console.log('form is not submitted', Data);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    };

    return (
        <Box
            heading='Login'
            button='Login'
            para="Don't have an account already?"
            linkText='Sign Up'
            linkHref='./signup'
            Form={LoginForm}
            image={loginimage}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            validateForm={validateForm}
            Data={Data}
            setData={setData}
            errors={errors}
            setErrors={setErrors}
        />
    );
}
