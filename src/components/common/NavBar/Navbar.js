import React from 'react'
import { Logo } from '../Logo'
import styles from './Navbar.module.css'; 
import { Search } from '../../Search';
import { Username } from '../../User';
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo/>
        <div className={styles.searchUser}>
            <Search/>
            <Username/>
        </div>
    </nav>
    )
}
