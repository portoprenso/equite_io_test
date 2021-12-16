import React from 'react';
import mainLogo from '../../assets/logo_main.svg'
import Image from 'next/image';


function Header() {
  return (
    <nav>
      <Image src={mainLogo} />
      <ul>
        <li>Главная</li>
        <li>Рейтинги</li>
        <li>Блог</li>
        <li>PRO</li>
      </ul>
    </nav>
  );
}

export default Header;