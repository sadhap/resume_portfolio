  import React from "react";
  import "./App.css"; 
  import Header from "./component/header/header";
  import TopContainer from "./component/TopContainer/Topcontainer";
  import Skillcontainer from "./component/skillcontainer/skillbody/Skillcontainer";
  import Project from "./component/Project/Project";
  import Experiencecontent from "./component/experience/ExperienceContent"
  import insta from "./images/insta.avif";
  import whatsapp from "./images/whatsapp.jpg";
  import linkedin from "./images/linkedin.webp";
  import twit from "./images/twit.webp";
  import facebook from "./images/facebook.png"
  import Contact from "./component/contact/Contact";
 
  function App(){
    return(
      
      <>
      <Header/>
      <TopContainer/>
      <Skillcontainer/>
      <Project/>
      <Experiencecontent/>
      <Contact/>
      <footer>
      <div className="contact">
        <div className="email">
        <h3 className="conme">Contact me:</h3>
         <h3 className="mail">sadhababy21@gmail.com</h3>
         <h3 className="phn">+91-6369476957</h3>
        </div>
        
         <ul>
          <li>
            <a href=""><img src={insta} alt="" /></a>
            <a href=""><img src={whatsapp} alt="" /></a>
            <a href=""><img src={facebook} alt="" /></a>
            <a href=""><img src={twit} alt="" /></a>
            <a href=""><img src={linkedin} alt="" /></a>
          </li>
         </ul>
      </div>
             </footer>  
      </>
   
    )
  }
  export default App;
  