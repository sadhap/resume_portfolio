import React from 'react'
import { Element } from 'react-scroll'
import TopContent from '../TopContent/TopContent'
import "./topcontainer.css"

const TopContainer = () => {
  return (
    <Element name='About' className='topcontainer'>  
    <TopContent/>
    </Element>
  )
}

export default TopContainer;