import styles from '../css/AfterSelectedCourse.module.css'
import Option from './Option.jsx'
const Options= ()=> {
    return (
        <div className={styles.box}>
            <Option optionName='Upload Attendance'/>
            <Option optionName='View Attendance'/>
            <Option optionName='Communication'/>
            <Option optionName='Configuration'/>
        </div>
    )
}

export default Options;