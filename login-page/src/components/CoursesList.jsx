import CoursesData from './CoursesData.jsx'
import styles from '../css/courses.module.css'

const CoursesList = ({selectedIndex}) => {
    if (selectedIndex === 0) {
        return (
            <CourseList courses={CoursesData['Active']} />
        )
    }
    else if (selectedIndex === 1) {
        return (
            <CourseList courses={CoursesData['Inactive']} />
        )
    }
    else if (selectedIndex === 2) {
        return (
            <CourseList courses={CoursesData.Both()} />
        )
    }
}

const CourseList = ({ courses }) => {
    return (
        <div>
            {
                courses.map((ele) => (
                    <a href='/AfterSelectedCourse' className={styles.courseElement}>{ele}</a>
                ))
            }
        </div>
    )
}

export default CoursesList;