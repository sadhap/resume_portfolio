import React from 'react'
import { Element } from 'react-scroll';
import "../experience/experience.css"
import skillsafarilogo from "./images/skillsafarilogo.jpg";
import mernskill1 from "./images/mernskill2.png";
import certificate from "./images/certificate.jpg";

 const Experiencecontent = () => {
  return (
    <>
    <Element name='Exp' className='expcontainer'>
       <div className="expcontent">
        <div className="img">
        <img src={skillsafarilogo} alt="" />
        </div>
        
       </div>
       <div className="button">
        <button name='button'>Know more</button>
        </div>
        <div className="para">
        <img src={certificate} alt="certificate" className='certificate'/>
        <p>successfuly completet 8 month <br /> fullstack development internship</p>
         <img src={mernskill1} alt="" className='logo'/>       
        </div>
      
         </Element>



   </>
  )
  }
  export default Experiencecontent;