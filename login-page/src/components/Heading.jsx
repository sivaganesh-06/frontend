import React from 'react';
import styles from '../css/signupLogin.module.css';

const Heading = ({ heading }) => (
    <div className={styles.heading}>
        <h3>{heading}</h3>
    </div>
);

export default Heading;
