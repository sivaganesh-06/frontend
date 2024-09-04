import React from 'react';
import styles from '../css/signupLogin.module.css';

const Button = ({ button }) => (
    <div className={styles.btn}>
        <button type="submit">{button}</button>
    </div>
);

export default Button;
