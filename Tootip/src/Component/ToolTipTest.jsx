import React from 'react'
import MainProject from './MainProject'
import './ToolTip.css'
function ToolTipTest() {
  return (
    <div>
      <h1>ToolTip</h1>
      <MainProject delay={500} content={'Tooltip content(Means Info of the Content)'} children={<p>Hover Me !</p>}/>
    </div>
  )
}

export default ToolTipTest
