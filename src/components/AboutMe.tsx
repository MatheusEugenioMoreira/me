import React from "react";
import styles from "../styles/components/AboutMe.module.css";
import { FaCodeBranch, FaGraduationCap } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";

import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContentContainer}>
        <div className={styles.profilePictureContainer}>
          <a
            href="https://github.com/matheusem"
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
          <p>Tech Lead, Full Stack Developer & DevOps</p>
          <br />
          <p>
            <FaGraduationCap /> {t("homepage.about.graduation")}
          </p>
          <p>
            <FiNavigation /> {t("homepage.about.next")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
