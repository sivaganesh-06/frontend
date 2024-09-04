import React, { useState } from 'react';
import Box from '../components/Box';
import SignUpForm from '../components/SignUpForm';
import signupimage from '../assets/frontendimage.jpg';

export default function SignUpPage() {
    const [Data, setData] = useState({ username: '', password: '', email: '', role: '' });
    const [errors, setErrors] = useState({ username: '', password: '', email: '', role: '' });
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const validateForm = () => {
        const newErrors = { username: '', password: '', email: '', role: '' };
        let isValid = true;
        if (!Data.username) {
            newErrors.username = 'username is required';
            isValid = false;
        }
        if (!Data.password) {
            newErrors.password = 'password is required'
            isValid = false;
        }
        if (!Data.email) {
            newErrors.email = 'email is required'
            isValid = false;
        } else if (!validateEmail(Data.email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }
        if (!Data.role) {
            newErrors.role = 'role is required'
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    }
    const handleSubmit = (e) => {
        if (validateForm()) {
            console.log('form submitted ', Data);
        }
        else {
            e.preventDefault();
            console.log('form is not submitted', Data);
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    }
    return (
        <Box
            heading='Sign Up'
            button='Sign Up'
            para='Already have an account?'
            linkText='Login'
            linkHref='/'
            Form={SignUpForm}
            image={signupimage}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            validateForm={validateForm}
            Data={Data}
            setData={setData}
            errors={errors}
            setErrors={setErrors}
        />
    )
}