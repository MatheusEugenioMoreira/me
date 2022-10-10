import React from 'react';
import { FaCode } from 'react-icons/fa';

import styles from '../styles/components/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerGradient}></div>
      <div className={styles.footerContentContainer}>
        <span>
          <FaCode />
          <span>
            <span className={styles.developedBy}>Developed </span>
            by{' '}
            <strong>
              <a
                href="https://github.com/matheusem"
                target="_blank"
                rel="noreferrer"
              >
                Matheus Eugenio Moreira
              </a>
            </strong>
          </span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
