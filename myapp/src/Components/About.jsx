import React from 'react'
import {useNavigate} from 'react-router-dom'

const About = () => {
    const navigation=useNavigate();

  return (
    <div className='about'>
        
        <button onClick={()=>navigation("/contact")}>Click Me</button>
    </div>
  )
}

export default About