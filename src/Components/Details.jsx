import React from 'react';
import './Details.css';
import photo3 from 'C:/Users/hp/Downloads/React files/second/src/Images/photo3.jpg';
import java from 'C:/Users/hp/Downloads/React files/second/src/Images/java.png';
import SQL from 'C:/Users/hp/Downloads/React files/second/src/Images/SQL.png';
import react from 'C:/Users/hp/Downloads/React files/second/src/Images/react.png';
import project2 from 'C:/Users/hp/Downloads/React files/second/src/Images/project2.png';
import project3 from 'C:/Users/hp/Downloads/React files/second/src/Images/project3.png';

const Details = () => {
  const name = 'DEVESH SHARMA';
  return (
    <div className='container-main'>
      <br /><br /><br /><br />
      <div className='container1'>
        <p>Hi, I am {name}
        </p>
        <p>I am a Web Developer, I have developed some projects based on my learning.</p>
        <p>I am continuously learning new Skills and applying those Skills.
        </p>
      </div>

      <div className='container2'>
        <div className="container">
          <div className="box">
            <img src={photo3}></img>
          </div>
        </div>
      </div>
      <div className='projects'>
        <div><h2 className='heading'>Projects</h2></div>
        <div className='project-images'>
          <span className='img'>
            <img src={project2} />
          </span>
          <span className='img'>
            <img src={project3} />
          </span>
        </div>
      </div>

      <div className='container3'>
        <div><h2 className='heading'>Certificates</h2></div>
        <div className='sub-container'>
          <span className='span'><div className="card"><img src={java} /></div>
          </span>
          <span className='span'><div className="card"><img src={react} /></div></span>
          <span className='span'><div className="card"><img src={SQL} /></div></span>
        </div>
      </div>

      <div className='container4'>
        <h2 className='heading'>SKILLS</h2>
        <div className='sub-container2'>
          <span>C</span>
          <span>JAVA</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Spring Boot</span>
        </div>
      </div>
    </div>
  )
}

export default Details
