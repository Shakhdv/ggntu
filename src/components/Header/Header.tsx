import React from "react";
import styles from "../Header/Header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_top}>
        <ul className={styles.header_left}>
          <li>
            <a href="https://gstou.ru/university/educational-and-social-work/">
              Молодёжная политика
            </a>
          </li>
          <li>
            <a href="https://gstou.ru/university/sports-activities/">
              Спортивная деятельность
            </a>
          </li>
          <li>
            <a href="https://gstou.ru/international/">
              Международная деятельность
            </a>
          </li>
          <li>
            <a href="https://gstou.ru/structure/institute.php">
              Факультеты и институты
            </a>
          </li>
          <li>
            <a href="https://gstou.ru/university/profiles/">
              Преподаватели и сотрудники
            </a>
          </li>
        </ul>
        <ul className={styles.header_right}>
          <li>
            <a href="https://gstou.ru/search/?searchid=2354554&text=1&web=0">
              <svg
                color="white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                fill="white"
                viewBox="5 -5 14 24"
              >
                <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
              </svg>
            </a>
          </li>
          <li className={styles.ru}>RU</li>
          <li className={styles.ru}>ENG</li>
          <li><FontAwesomeIcon icon={faEye} aria-hidden="true" viewBox="100 -20 300 600" className="red-border" /></li>
        </ul>
      </div>
      <ul className={styles.header_bottom}>
        <li>
          <img className={styles.logo} src="src/assets/logo-short.png" alt="" />
        </li>
        <li className={styles.burger}>
            <div></div>
            <div></div>
            <div></div>
        </li>
        <li>Университет</li>
        <li>Поступление</li>
        <li>Образование</li>
        <li>Наука</li>
        <li>Инновации</li>
        <li>Сервисы</li>
      </ul>
    </div>
  );
};

export default Header;
