import CheckBoxGroup from "./CheckBox";
import CoursesList from "./CoursesList";
import styles from '../css/courses.module.css'
import { useState } from "react";

const Courses = () => {
    const [selectedIndex, setSelectedIndex]= useState(0);
    return (
        <div className= {styles.mainBox}>
            <div className={styles.checkBox}>
                <CheckBoxGroup selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
            </div>
            <div className={styles.courseTable}>
                <CoursesList selectedIndex={selectedIndex}/>
            </div>
        </div>
    )
}

export default Courses;