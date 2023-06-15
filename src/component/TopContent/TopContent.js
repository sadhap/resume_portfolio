import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css";
import myImg from "./images/img4.jpg";
const TopContent = () => {
  return (
    <>
    <div className="topcontent">
    <img src={myImg} alt="" className='myimg'/>
    <div className="topcontent_container">
        <h1>Mr.Sadhasivam</h1>
        <p>A MERN-Stack Developer</p>
        <a href="www.google.com">
            <button className='topcontent_downloadbutton'>Download-CV</button>
        </a>
    </div>
    <Link to='project' smooth={true} duration={500} className='work-link'>
        <button className='topcontent_workbutton'>My work</button>
       </Link>
  </div>
  </>
  
  )
}
export default TopContent;