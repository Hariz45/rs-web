import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.gif"
import react from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import node from "../assets/node.png"
import python from "../assets/python.gif"
import express from "../assets/express.png"
import mongodb from "../assets/mongodb.png"
import mysql from "../assets/mysql.png"
import tailwind from "../assets/tailwind.png"
import java from "../assets/java.gif"

















const Technology = () => {
  return (
    <section id='technology'>
      <div>
        <div className='section-title'>
          <span>technologies</span>
          <h1>Tools We WorK With</h1>
        </div>
        <div className='tool-grid'>
          <div className='tool-card'>
            <img src={html} alt="tool1" width={50} height={50} />
            <h3>HTML</h3>
          </div>
          <div className='tool-card'>
            <img src={css} alt="tool2" width={50} height={50} />
            <h3>CSS</h3>
          </div>
          <div className='tool-card'>
            <img src={javascript} alt="tool3" width={50} height={50} />
            <h3>JavaScript</h3>
          </div>
          <div className='tool-card'>
            <img src={react} alt="tool4" width={50} height={50} />
            <h3>Ract Js</h3>
          </div>
          <div className='tool-card'>
            <img src={nextjs} alt="tool5" width={50} height={50} />
            <h3>Next Js</h3>
          </div>
          <div className='tool-card'>
            <img src={node} alt="tool6" width={50} height={50} />
            <h3>Node Js</h3>
          </div>
          <div className='tool-card'>
            <img src={python} alt="tool7" width={50} height={50} />
            <h3>Python</h3>
          </div>
          <div className='tool-card'>
            <img src={express} alt="tool8" width={50} height={50} />
            <h3>Express Js</h3>
          </div>
          <div className='tool-card'>
            <img src={mongodb} alt="tool9" width={50} height={50} />
            <h3>MongoDB</h3>
          </div>
          <div className='tool-card'>
            <img src={mysql} alt="tool10" width={50} height={50} />
            <h3>MySQL</h3>
          </div>
          <div className='tool-card'>
            <img src={tailwind} alt="tool11" width={50} height={50} />
            <h3>Tailwind CSS</h3>
          </div>

          <div className='tool-card'>
            <img src={java} alt="tool12" width={50} height={50} />
            <h3>Java</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology