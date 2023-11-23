import React from 'react'
import { Post } from '../Post'
import styles from './Timeline.module.css'; 

export const Timeline = () => {
  return (
    <div className={styles.timeline}>Timeline
      <Post/>
    </div>
  )
}
