import styles from '../css/AfterSelectedCourse.module.css'

const Option = ({ optionName }) => {
    return (
        <div className={styles.option}>{optionName}</div>
    )
}

export default Option;