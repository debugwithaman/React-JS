import React from 'react'
import { useState } from 'react'

function MainProject({children,content,delay}) {

    const[isVisible,setisVisible] = useState(false);
    let timeout;

    function handleShowToolTip(){
      timeout = setTimeout(()=>{
        setisVisible(true);
      },delay || 500)
    }
    function handleHeightToolTip(){
      clearTimeout(timeout);
      setisVisible(false);
    }
  return (
    <div className='ToolTipContainer' onMouseEnter={()=>{
      handleShowToolTip()
    }} onMouseLeave={()=>{
      handleHeightToolTip()
    }}>
        {children}
        {
            isVisible ?  <div className="tooltip">
            {content}
          </div> : null
        }
    </div>
  )
}

export default MainProject
