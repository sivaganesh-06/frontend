import React from 'react';
import styles from '../css/signupLogin.module.css';

const Role = ({ Data, handleChange, errors }) => (
    <div className={styles.role} id={styles.userInputFields}>
        <label htmlFor="role">Role:</label>
        <select className={styles.inputbox} name="role" id="" value={Data.role} onChange={handleChange} required>
            <option value=''>Choose...</option>
            <option value='manager'>manager</option>
            <option value='admin'>admin</option>
            <option value='user'>user</option>
        </select>
        {errors && <div className={styles.invalidFeedback}>{errors['role']}</div>}
    </div>
);

export default Role;
