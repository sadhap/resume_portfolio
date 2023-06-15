import React from 'react';
import "./contact.css";
import { Element } from 'react-scroll';
// import insta from "./images/insta.avif";
import whatsapp from "./images/whatsapp.jpg";
import linkedin from "./images/linkedin.png";
import twit from "./images/twit.jpg";
import facebook from "./images/facebook.png";
import github from "./images/github.png";


const Contact = () => {
    const message = ()=>{
        alert("Cv-downloaded successfully");
    }
  return (
    <>
<Element className='contact-container' name='Contact'>
    <div className="image">
    </div>
    <div className="details">
        <button className='cve' onClick={message}>Download-Cv</button>
        <ul>
          <li>
            <a href=""><img src={whatsapp} alt="" /></a>
            <a href=""><img src={facebook} alt="" /></a>
            <a href=""><img src={github} alt="" /></a>
            <a href=""><img src={twit} alt="" /></a>
            <a href=""><img src={linkedin} alt="" /></a>
          </li>
         </ul>
         <div className="content">
          <a href="https://whatsapp.com/dl/">Join with Whatsapp</a>
          <a href="https://www.facebook.com/profile.php?id=100028454282079">Join with Facebook</a>
          <a href="https://github.com/sadhap">Join with GitHub</a>
          <a href="https://twitter.com/i/flow/single_sign_on">Join with Twiter</a>
          <a href="https://www.linkedin.com/in/sadhasivam-m/">Join with LinkedIn</a>
         </div>
    </div>
</Element>
</>
  )
}

export default Contact;