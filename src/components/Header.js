import React from 'react'
import portada from '../assets/Banner.jpg'
import './style/Header.css'


  
  const Header = () => {
  
  
    return (
        <header>
           <img src={portada} alt="header"/>

        </header>
      );
}
 
export default Header;