import React, { useState } from 'react';
import styles from '../css/courses.module.css'

const CheckBox = ({ labelName, index, selectedIndex, setSelectedIndex }) => {
    const handleCheckboxChange = () => {
        setSelectedIndex(index);
    };

    return (
        <div className={styles.checkElement}>
            <input
                type="radio"
                checked={selectedIndex === index}
                onChange={handleCheckboxChange}
                id={labelName}
            />
            <label htmlFor={labelName}>{labelName}</label>
        </div>
    );
};

const CheckBoxGroup = ({ selectedIndex, setSelectedIndex }) => {

    const options = ['Active', 'Inactive', 'Both'];

    return (
        <>
            {options.map((labelName, index) => (
                <CheckBox
                    key={index}
                    labelName={labelName}
                    index={index}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                />
            ))}
        </>
    );
};

export default CheckBoxGroup;
