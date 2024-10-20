import React from 'react';
import '../../styles/widgets/menuIcom.styles.scss'; // Подключаем стили

const MenuIcon: React.FC = () => {
  return (
    <div className="menu-icon">
      <div className="line"></div>
      <div className="line short"></div>
      <div className="line"></div>
    </div>
  );
};

export default MenuIcon;

