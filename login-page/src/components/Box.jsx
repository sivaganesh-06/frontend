import React from 'react';
import Heading from './Heading';
import Description from './Description';
import styles from '../css/signupLogin.module.css';

const Box = ({ heading, button, para, linkText, linkHref, Form, ...formprops }) => (
    <div className={styles.centerIt}>
        <div className={styles.box}>
            <div className={styles.imgdiv}>
                <img src={formprops.image} alt="" />
            </div>
            <div className={styles.contentBox}>
                <div className={styles.content}>
                    <Heading heading={heading} />
                    <Form button={button} {...formprops} />
                    <Description
                        para={para}
                        linkText={linkText}
                        linkHref={linkHref}
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Box;
