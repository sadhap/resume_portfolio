import React, { useState } from 'react'
import "../projectlist/projectlist.css"
const Projectlist = ({img,title,desc,link}) => {
    const [show,setShow]= useState(false);
  return (
    <>
 <a href={link} className='list'>  
<div className='project' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
  {
    show ? (
    <div><h4>{title}</h4><p>{desc}</p></div>
    ):
    (
      <img src={img} alt="" className='images'/>
    )
  }
 </div>
 </a>
 </>
  )
}

export default Projectlist