import React from 'react';
import './Resume.css';
import Resume from 'C:/Users/hp/Downloads/React files/second/src/Images/Resume.jpg';

const Skills = () => {
  return (
    <div className='main-container'>
      <span className='container01'>
      <img src={Resume} style={{width:'80%'}}/>
      </span>
    </div>
  )
}

export default Skills