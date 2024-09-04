import React from 'react';
import InputField from './InputField';
import Button from './Button';
import styles from '../css/signupLogin.module.css';

const LoginForm = ({ button, ...formprops }) => (
    <div className={styles.form}>
        <form onSubmit={formprops.handleSubmit} action="/courses" className="needs-validation" noValidate>
            <InputField
                label='username'
                type='text'
                name='username'
                value={formprops.Data.username}
                handleChange={formprops.handleChange}
                errors={formprops.errors}
                Data={formprops.Data}
            />
            <InputField
                label='password'
                type='password'
                name='password'
                value={formprops.Data.password}
                handleChange={formprops.handleChange}
                errors={formprops.errors}
                Data={formprops.Data}
            />
            <Button button={button} />
        </form>
    </div>
);

export default LoginForm;
