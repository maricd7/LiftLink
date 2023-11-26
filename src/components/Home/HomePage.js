import React, { useState } from 'react'
import { Navbar } from '../common'
import { Timeline } from './Timeline'
import styles from './Home.module.css'; 
import { CreatePost } from './Post';

export const HomePage = () => {
  const[createPost, toggleCreatePost] = useState(false); 

  const createToggler = ()=>{
    createPost ? toggleCreatePost(false)  : toggleCreatePost(true)
  }
  return (
    <div className={styles.homepage}>
        <Navbar onClick = {createToggler}/>
        <div className={styles.main}>
          <div>Who to follow</div>
        <Timeline/>
         <div>Topics</div>
        </div>
        {createPost && <CreatePost onClick={createToggler}/>}
    </div>
  )
}
