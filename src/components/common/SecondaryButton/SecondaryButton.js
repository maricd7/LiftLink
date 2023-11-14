import React from 'react'
import styles from  './SecondaryButton.module.css'
export const SecondaryButton = ({text}) => {
  return (
   <button className={styles.SecondaryButton}>{text}</button>
  )
}
