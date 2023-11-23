import React from 'react'
import { Navbar } from '../common'
import { Timeline } from './Timeline'
import styles from './Home.module.css'; 

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
        <Navbar/>
        <Timeline/>
    </div>
  )
}
