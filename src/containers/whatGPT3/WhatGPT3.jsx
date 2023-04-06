import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div  id='wgpt3' className="gpt3__whatgpt3 container">
      <div className="gpt3__whatgpt3-feature">
      <Feature title='What is GPT-3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title='Chatbots' text='Computer programs designed to simulate conversation with human users through messaging interfaces with the useof natural languageprocessing and artificial intelligence'/>
        <Feature title='Knowledgbase' text='Centralized repository of information that contains articles, documents, videos, and other types of content related to a specific topic or area of interest'/>
        <Feature title='Education' text='The process of acquiring knowledge, skills, values, and attitudes through various forms of learning. It is a lifelong process that begins in childhood and continues throughout a persons life'/>
      </div>
    </div>
  )
}

export default WhatGPT3