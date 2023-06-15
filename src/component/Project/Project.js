import React from 'react'
import { Element } from 'react-scroll'
import "./project.css";
import Projectlist from '../projectlist/Projectlist';
import mern from "../Project/projectimg/mern.jpeg"
//html,css,javascript.........................
import crud from "./projectimg/crud.jfif";
import expensetrack from "./projectimg/expensetrack.jpg";
import tictacktoe from "./projectimg/tictactoe.jpg";
import rockpaper from "./projectimg/rockpaper.jpg";
import ludo from "./projectimg/ludo.jpeg";
import calculator from "./projectimg/calcy.jpg";
import guessMynumber from "./projectimg/guessmynumber.jfif";
import tipcalcy from "./projectimg/tipcalcy.png"
//react project images
import reactAccordian from "./projectimg/reactaccordian.png";
import reactGituser from "./projectimg/reactgitusers.JPG";
import reactGooglereviews from "./projectimg/reactgooglereview.JPG";
import reactTour from "./projectimg/reacttoursite.JPG";
import siteView from "./projectimg/siteviewreact.JPG";
import reactForm from "./projectimg/reactform.png";
import reactcrud from "./projectimg/crud.jfif";



const Project = () => {
 const myProject  =[
    {
        image:rockpaper,
        title:'facebook',
        description:'Download background images. Find the best background images for your phone, desktop or projects',
        link:'www.google.com'
    },
    {
        image:ludo,
        title:'facebook',
        description:'Download background images. Find the best background images for your phone, desktop or projects',
        link:'www.google.com'
    },
    {
        image:tictacktoe,
        title:'facebook',
        description:'Download background images. Find the best background images for your phone, desktop or projects',
        link:'www.google.com'
    },
    {
        image:expensetrack,
        title:'facebook',
        description:'Download background images. Find the best background images for your phone, desktop or projects',
        link:'www.google.com'
    },
    {
        image:guessMynumber,
        title:'facebook',
        description:'Download background images. Find the best background images for your phone, desktop or projects',
        link:'www.google.com'
    },
    {
        image:calculator,
        title:'facebook',
        description:'Download background images. Find the best background images for your phone, desktop or projects',
        link:'www.google.com'
    },
    {
        image:crud,
        title:'facebook',
        description:'Download background images. Find the best background images for your phone, desktop or projects',
        link:'www.google.com'
    },
    {
        image:tipcalcy,
        title:'facebook',
        description:'Download background images. Find the best background images for your phone, desktop or projects',
        link:'www.google.com'
    },
    {
        image:reactAccordian,
        title:'facebook',
        description:'Download background images. Find the best background images for your phone, desktop or projects',
        link:'www.google.com'
    },
    {
        image:reactForm,
        title:'facebook',
        description:'Download background images. Find the best background images for your phone, desktop or projects',
        link:'www.google.com'
    },
    {
        image:reactGituser,
        title:'facebook',
        description:'Download background images. Find the best background images for your phone, desktop or projects',
        link:'www.google.com'
    },
    {
        image:reactGooglereviews,
        title:'facebook',
        description:'Download background images. Find the best background images for your phone, desktop or projects',
        link:'www.google.com'
    },
    {
        image:reactTour,
        title:'facebook',
        description:'Download background images. Find the best background images for your phone, desktop or projects',
        link:'www.google.com'
    },
    {
        image:siteView,
        title:'facebook',
        description:'Download background images. Find the best background images for your phone, desktop or projects',
        link:'www.google.com'
    },
    {
        image:reactcrud,
        title:'facebook',
        description:'Download background images. Find the best background images for your phone, desktop or projects',
        link:'www.google.com'
    },

];
  return (
 <><Element name='Projects'className='project_container'>
<div className="project_content">

  {
    myProject.map((project,index)=>{
        return (
            <Projectlist key={index} img={project.image} title={project.title} desc={project.description} link={project.link}/>
        )
    })
  }
  <div className="mern-project">
  <a href="www.google.com">
<img src={mern} alt="" />
</a>
</div>
</div>
</Element>
</>
  )
}
export default Project;