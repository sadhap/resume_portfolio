import React from 'react'
import {LinearProgress} from '@mui/material'
import "./skillcontent.css";
import Imagebtn from './Imagebtn';



const Skillcontent = () => {
  return (
    <>
    <div className="skillcontent">
    <div className="skillcontent_text">
        <h2>SKILLSET</h2>
        <div className="skillcontainer_skillset">
            <h5>React</h5>
            <div className="skillcontainer_slide skillcontainer_slide1">
                   <LinearProgress variant='determinate' value={90}></LinearProgress>
            </div>
        </div>
        <div className="skillcontainer_skillset">
            <h5>Javascript</h5>
            <div className="skillcontainer_slide skillcontainer_slide2">
                   <LinearProgress variant='determinate' value={95}></LinearProgress>
            </div>
        </div>
        <div className="skillcontainer_skillset">
            <h5>Node Js</h5>
            <div className="skillcontainer_slide skillcontainer_slide3">
                   <LinearProgress variant='determinate' value={90}></LinearProgress>
            </div>
           
        </div>
        <div className="skillcontainer_skillset">
            <h5>Express Js</h5>
            <div className="skillcontainer_slide skillcontainer_slide4">
                   <LinearProgress variant='determinate' value={80}></LinearProgress>
            </div>
        </div>
        <div className="skillcontainer_skillset">
            <h5>MongoDB</h5>
            <div className="skillcontainer_slide skillcontainer_slide5">
                   <LinearProgress variant='determinate' value={90}></LinearProgress>
            </div>
        </div>
    </div>
      <Imagebtn/>
    </div>
   
   </>
   )
}

export default Skillcontent;