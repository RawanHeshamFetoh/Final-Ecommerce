import React from 'react'
import styles from './header.module.css'
const Header = ({title , details}) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <h3>{title}</h3>
        <p>{details}</p>
      </div>
    </div>
  )
}

export default Header
