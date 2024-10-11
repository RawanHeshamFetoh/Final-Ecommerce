import React from 'react'
import styles from './about.module.css'
import Header from '../../components/Header/Header'
const About = () => {
    return (
        <div className={`container ${styles.About}`}>
            <Header title={"about us"} details={"home > contactus"} />

        </div>
    )
}

export default About
