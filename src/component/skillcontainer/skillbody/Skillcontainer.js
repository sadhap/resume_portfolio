import React from 'react'
import { Element } from 'react-scroll'
import Skillcontent from '../skillcontent/Skillcontent'
import "./Skillcontainer.css"

const Skillcontainer = () => {
  return (
  <>
  <Element name='Skills' className='skillContainer'>
  <Skillcontent/>
  </Element>
  </>
  )
}

export default Skillcontainer;