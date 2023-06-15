import React from 'react'

import Reactimage from "./logo/react.png";
import Javascript from "./logo/javascript.png";
import Express from "./logo/expres.jpg";
import Node from "./logo/node.png";
import Mongo from "./logo/mongo.jfif"
import "./imagebutton.css";

const Imagebtn = () => {
  return (
    <>
  <div className="container">
    <ul>
      <li>
      <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={Reactimage} alt="" />
      </div>
      <div className="flip-card-back">
      <h1>96%</h1>
      <div className="msg">
        <h2>Intermediate</h2>
      </div>
      </div>
    </div>
  </div>
  <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
      <img src={Javascript} alt="" />
      </div>
      <div className="flip-card-back">
      <h1>96%</h1>
      <div className="msg">
        <h2>Intermediate</h2>
      </div>
      </div>
    </div>
  </div>
  <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
      <img src={Node} alt="" />
      </div>
      <div className="flip-card-back">
      <h1>96%</h1>
      <div className="msg">
        <h2>Intermediate</h2>
      </div>
      </div>
    </div>
  </div>
  <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
      <img src={Express} alt="" />
      </div>
      <div className="flip-card-back">
      <h1>96%</h1>
      <div className="msg">
        <h2>Intermediate</h2>
      </div>
      </div>
    </div>
  </div>
  <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">
      <img src={Mongo} alt="" />
      </div>
      <div className="flip-card-back">
      <h1>96%</h1>
      <div className="msg">
        <h2>Intermediate</h2>
      </div>
      </div>
    </div>
  </div>
      </li>
    </ul>
  </div>
  </>
  )
}

export default Imagebtn;