import React from 'react'
import '../Menu/Menu.css'

const Menu = () => {

        const redirectToBuyPage = () => {
          window.open('https://raydium.io/', '_blank');
        };
      
        const redirectToChartPage = () => {
          window.open('https://birdeye.so/', '_blank');
        };
      
        const redirectToTwitterPage = () => {
          window.open('https://twitter.com', '_blank');
        };

  return (
    <div>

    <div className='MenuSection'>
        <div className='Menuboxes'>

        <button className="btn-21 mist" onClick={redirectToBuyPage}><span>Buy Mist</span></button>
      <button className="btn-21 chart" onClick={redirectToChartPage}><span>Chart</span></button>
      <button className="btn-21 twitter" onClick={redirectToTwitterPage}><span>Twitter</span></button>

        </div>
    </div>

    </div>
  )
}

export default Menu