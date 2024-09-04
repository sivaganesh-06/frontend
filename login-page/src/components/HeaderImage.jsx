import headerImage from '../assets/header.jpg'
import styles from '../css/AfterSelectedCourse.module.css'
const HeaderImage= ()=> {
    return (
        <header>
            <div className= {styles.header}>
                <img src={headerImage} alt="" id={styles.headerImage} />
            </div>
        </header>
    )
}

export default HeaderImage;