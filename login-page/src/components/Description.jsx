import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/signupLogin.module.css';

const Description = ({ para, linkText, linkHref }) => (
    <div className={styles.desc}>
        <p>{para} <Link to={linkHref}>{linkText}</Link></p>
    </div>
);

export default Description;
