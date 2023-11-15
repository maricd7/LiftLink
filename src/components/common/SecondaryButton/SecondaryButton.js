import React from 'react'
import styles from  './SecondaryButton.module.css'
export const SecondaryButton = ({text, onClick}) => {
  return (
   <button onClick={onClick} className={styles.SecondaryButton}>{text}</button>
  )
}
