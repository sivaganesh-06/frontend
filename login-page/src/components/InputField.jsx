import React from 'react';
import styles from '../css/signupLogin.module.css';

const InputField = ({ label, type, name, value, handleChange, errors, Data }) => (
    <div className={styles.name} id={styles.userInputFields}>
        <label htmlFor={name}>{label}</label>
        <div className={styles.inputbox}>
            <input
                type={type}
                id={name}
                name={name}
                value={Data[name]}
                onChange={handleChange}
                required
            />
            {errors && <div className={styles.invalidFeedback}>{errors[name]}</div>}
        </div>
    </div>
);

export default InputField;
