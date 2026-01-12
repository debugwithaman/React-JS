import React, { useState } from 'react'
import MainProject from './MainProject';
import './MainProject.css'
function Test() {
const[activeStep, setActiveStep]= useState(0);
const step = ['Step 1','Step 2','Step 3','Step 4','Step 5'];

  return (
    <div className='step-progress-bar-container'>
      <h1>Step Progress Bar</h1>
      <MainProject setActiveStep={setActiveStep} steps={step} activeSteps={activeStep}/>
      
    </div>
  )
}

export default Test
