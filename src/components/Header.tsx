import React from 'react';
import "../styles.scss";
import '../styles/header.styles.scss';

import MenuIcon from './widgets/MenuIcon.widgets';

import gruz from '../assets/img/work/2.png';

const MiniImg: React.FC<any> = ({children}) => {

  const settingsWindow = {
    width: '500px', 
    height: '700px',
  }

  return (

    <div style = {settingsWindow} className = "miniWindow">
      {children} 
    </div>   

  )
}

const Header: React.FC = () => {
  const styleBaner = {
    backgroundImage: `url(${gruz})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <header className="header"> 
      <div className="header__main container">
        <i className="logo_icon icon-logo"></i> 
        <MenuIcon /> 
      </div>  
      <h3 className="text-description container">
        "ООО УССУРВЕСКОМ" - ведущий Дилер весового оборудования на Дальнем Востоке  
      </h3>  
      <h2 className="text-logo container">
        ООО “УССУРВЕСКОМ”
      </h2>

      {/* Обертка для баннера */}
      <div className="wrapper">
        <div style={styleBaner} className="baner container">
          <div className="baner__back">
            <div className="baner__back__container">

            

            </div>    
          </div>   
        </div>  
      </div>
    </header>
  );
};

export default Header;

