import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faEnvelope, faBullhorn, faSitemap ,faCompass} from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTelegram, faVk ,faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_top}>
        <a  href="https://gstou.ru/university/recommendations-for-the-protection-of-personal-data.php"><p className={styles.footer_text}><FontAwesomeIcon className={styles.icon_info} icon={faInfo} viewBox="200 300 200 180" fontSize={7}  aria-hidden="true" />Рекомендации по защите персональных данных</p></a>
        <a href="https://gstou.ru/university/anti-corruption/"><p className={styles.footer_text}><FontAwesomeIcon icon={faBullhorn} aria-hidden="true" className="red-border" viewBox="200 0 500 500" />Противодействие коррупции</p></a>
        <a href="https://gstou.ru/university/karta.php"><p className={styles.footer_text}><FontAwesomeIcon icon={faCompass} aria-hidden="true"  viewBox="200 0 500 500"  className="red-border" />Карта корпусов</p></a>
        <a href="https://gstou.ru/sitemap.php"><p className={styles.footer_text}> <FontAwesomeIcon icon={faSitemap} aria-hidden="true" className="red-border" viewBox="200 0 600 500"/>Карта сайта</p></a>
      </div>
      <div className={styles.footer_center}>
        <div className={styles.footer_left}>
          <h4>СВЕДЕНИЯ</h4>
          <p><a href="https://gstou.ru/sveden/common/">Основные сведения</a></p>
          <p><a href="https://gstou.ru/sveden/">Сведения об образовательной организации</a></p>
          <p><a href="https://gstou.ru/university/leadership.php">Руководство</a></p>
          <p><a href="https://gstou.ru/sveden/document/">Документы</a></p>
          <p><a href="https://gstou.ru/structure/institute.php">Факультеты и институты</a></p>
          <p><a href="https://gstou.ru/university/management-revenue-information.php">Сведения о доходах руководства учреждений</a></p>
          <p> <a href="https://gstou.ru/university/antiterrorist-group.php">Антитеррористическая группа</a></p>
        </div>
        <div className={styles.contacts}>
          <h4>КОНТАКТЫ</h4>
          <div className={styles.contacts_right}>
            <div>
              <div>
                <h6>Общий отдел:</h6>
                <p><FontAwesomeIcon icon={faPhone} aria-hidden="true" viewBox="150 -60 450 650" color="#962237"/> 8 (8712) 22-36-07</p>
                <p className={styles.email}><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" color="#962237"/> info@gstou.ru</p>
              </div>
              <div>
                <h6>Приемная комиссия:</h6>
                <p><FontAwesomeIcon icon={faPhone} aria-hidden="true" viewBox="150 -60 450 650" color="#962237"/> 8 (929) 003-66-66</p>
                <p><FontAwesomeIcon icon={faPhone} aria-hidden="true" viewBox="150 -60 450 650" color="#962237"/> 8 (929) 008-66-66</p>
                <p className={styles.email}><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" color="#962237" /> priem@gstou.ru</p>
              </div>
            </div>
            <div>
              <div>
                <h6>Приемная ректора:</h6>
                <p><FontAwesomeIcon icon={faPhone} aria-hidden="true" viewBox="150 -60 450 650" color="#962237"/>8 (8712) 22-21-70</p>
              </div>
              <div>
                <h6>Тех. поддержка:</h6>
                <p className={styles.email}><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" viewBox="100 -80 450 600" color="#962237" /> orsis@gstou.ru</p>
              </div>
            </div>
          </div>
        </div>
          <img className={styles.kart} src="https://gstou.ru/images/karta/kart.png" alt="fgfbg" />
      </div>
      <div className={styles.footer_bottom}>
        <p>
          © 2024 ГРОЗНЕНСКИЙ ГОСУДАРСТВЕННЫЙ НЕФТЯНОЙ ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ
        </p>
        <div className={styles.sc}>
          <div><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /></div>
          <div><FontAwesomeIcon icon={faVk} aria-hidden="true" /></div>
          <div><FontAwesomeIcon icon={faYoutubeSquare} /></div>
          <div><FontAwesomeIcon icon={faTelegram} aria-hidden="true"/></div>
          <div><FontAwesomeIcon icon={faYoutube} /></div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
