import React from 'react'
import './MainPage.scss';
import MenuView from '../menu_bar/MenuView'


const MainPage = () => {
  return (
    <div className='MainPage'>
       <MenuView/>
       <div className='Main-text'>
          <div className='main-child'>
            <h1>ETAMIN - IT SOLUTIONS</h1>
            <p>
            Where Imagination Meets Innovation
            </p>
            <button>Try For Free</button>
          </div>
       </div>
      
    </div>
  )
}

export default MainPage
