import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="#about">Об университете</Link></li>
        <li><Link to="#admission">Поступление</Link></li>
        <li><Link to="#education">Образование</Link></li>
        <li><Link to="#science">Наука</Link></li>
        <li><Link to="#innovation">Инновации</Link></li>
        <li><Link to="#youth-policy">Молодёжная политика</Link></li>
        <li><Link to="#sports">Спорт</Link></li>
        <li><Link to="#services">Сервисы</Link></li>
        <li><Link to="#press-office">Пресс-служба</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;