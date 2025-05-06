import React from "react";
import styles from "../styles/components/AboutMe.module.css";
import { FaCodeBranch, FaRegCheckCircle } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";

import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContentContainer}>
        <div className={styles.profilePictureContainer}>
          <a
            href="https://github.com/MatheusEugenioMoreira"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className={styles.profilePicture}
              src="https://avatars.githubusercontent.com/u/59825515?v=4"
              alt="Profile"
            />
          </a>
        </div>
        <div className={styles.aboutMeDetailsContainer}>
          <h1>Matheus Eugenio Moreira</h1>
          <p>IT Manager & Tech Lead at eduCAT | AI engineer</p>
          <br />
          <p> {t("homepage.about.experience")}</p>
          <p>
            <FiNavigation /> {t("homepage.about.next")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
