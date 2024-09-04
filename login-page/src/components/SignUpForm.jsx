import React from 'react';
import InputField from './InputField';
import Role from './Role';
import Button from './Button';
import styles from '../css/signupLogin.module.css';

const SignUpForm = ({ button, ...formprops }) => (
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
            <InputField
                label='email'
                type='email'
                name='email'
                value={formprops.Data.email}
                handleChange={formprops.handleChange}
                errors={formprops.errors}
                Data={formprops.Data}
            />
            <Role
                Data={formprops.Data}
                handleChange={formprops.handleChange}
                errors={formprops.errors}
            />
            <Button button={button} />
        </form>
    </div>
);

export default SignUpForm;
