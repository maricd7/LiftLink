import React from 'react'
import styles from './Username.module.css'; 
import { useAuth } from '../../contexts/AuthContext';

export const Username = () => {
    const { user } = useAuth();
    const userName = user.providerData[0].uid ;
  return (
    <div className={styles.userName}>{userName}</div>
  )
}
