import React from 'react'
import '../Monitor/Monitor.css'

import Eyes from '../../images/eyes.png'

const Monitor = () => {
  return (
    <div>
      
    <div className='Monitor'>
      <div className='MonitorBoxes'>
      <div className='MonitorTitle'>
        <h2>Mistery</h2>
      </div>
    <div className='MonitorEyes'>
      <img src={Eyes} />
    </div>
      </div>
    </div>


    </div>
  )
}

export default Monitor