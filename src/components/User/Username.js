import React from 'react'
import styles from './Username.module.css'; 
import { useAuth } from '../../contexts/AuthContext';
import { Icon } from '@iconify/react';
export const Username = () => {
    const { user } = useAuth();
    const userName = user.providerData[0].uid ;
  return (
    <div className={styles.userName}>
      <Icon icon="ri:notification-2-line" color="#fefefe" />
      <Icon icon="ri:message-3-line" color="#fefefe" />
      {userName}
      <Icon icon="ri:settings-4-line" color="#fefefe" />
      </div>
  )
}
