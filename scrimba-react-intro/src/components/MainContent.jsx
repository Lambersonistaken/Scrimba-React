/* eslint-disable no-unused-vars */
import React from 'react'
import "./main.css"
import bg from "../assets/bg.png"

const MainContent = () => {
  return (
    <div>
      <h1 className='main-headline'>Fun facts about React</h1>
      <ul className='list'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img className='image' src={bg} alt="" />
      
    </div>
  )
}

export default MainContent
