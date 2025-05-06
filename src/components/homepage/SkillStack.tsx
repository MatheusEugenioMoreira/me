import React from "react";

import simpleJsIcon from "../../assets/icons/simple/javascript-simple.svg";
import simpleTsIcon from "../../assets/icons/simple/typescript-simple.svg";
import simpleReactIcon from "../../assets/icons/simple/react-simple.svg";
import simpleSassIcon from "../../assets/icons/simple/sass-simple.svg";
import simpleNextIcon from "../../assets/icons/simple/next-simple.svg";

import simpleNodeIcon from "../../assets/icons/simple/node-simple.svg";
import appleIcon from "../../assets/icons/stack/apple.png";
import firebaseIcon from "../../assets/icons/stack/firebase.svg";
import pythonIcon from "../../assets/icons/stack/python.svg";
import djangoIcon from "../../assets/icons/stack/django.png";

import simpleSqlServerIcon from "../../assets/icons/simple/sqlserver-simple.svg";
import simpleMySQLIcon from "../../assets/icons/simple/mysql-simple.svg";

import simpleHtmlIcon from "../../assets/icons/stack/html5.svg";
import simpleCssIcon from "../../assets/icons/stack/css-3.svg";
import simpleGitIcon from "../../assets/icons/simple/git-simple.svg";
import simpleDockerIcon from "../../assets/icons/simple/docker-simple.svg";

import styles from "../../styles/pages/homepage/SkillStack.module.css";
import SkillStackItem from "./SkillStackItem";

import awsStackIcon from "../../assets/icons/stack/aws.png";
import terraformStackIcon from "../../assets/icons/stack/terraform.png";
import kubernetesStackIcon from "../../assets/icons/stack/kubernetes.svg";

function SkillStack() {
  return (
    <div className={styles.skillsStackContainer}>
      <SkillStackItem
        icon={simpleJsIcon}
        name="JavaScript"
        role="front-end"
        color="#F7DF1E"
        level={5}
      />
      <SkillStackItem
        icon={simpleTsIcon}
        name="TypeScript"
        role="front-end"
        color="#3178C6"
        level={3}
      />
      <SkillStackItem
        icon={simpleReactIcon}
        name="React"
        role="front-end"
        color="#61DAFB"
        level={5}
      />
      <SkillStackItem
        icon={pythonIcon}
        name="Python"
        role="back-end"
        color="#10314c"
        level={6}
      />
      <SkillStackItem
        icon={djangoIcon}
        name="Django"
        role="back-end"
        color="#0a2615eb"
        level={6}
      />
      <SkillStackItem
        icon={simpleCssIcon}
        name="CSS"
        role="front-end"
        color="#32658F"
        level={5}
      />
      <SkillStackItem
        icon={simpleNodeIcon}
        name="Node.js"
        role="back-end"
        color="#539E43"
        level={4}
      />
      <SkillStackItem
        icon={appleIcon}
        name="AppleScript"
        role="front-end"
        color="#000000"
        level={3}
      />
      <SkillStackItem
        icon={simpleGitIcon}
        name="Git"
        role="tool"
        color="#DE4C36"
        level={5}
      />
      <SkillStackItem
        icon={firebaseIcon}
        name="Firebase"
        role="front-end"
        color="#7f7a52"
        level={6}
      />

      <SkillStackItem
        icon={awsStackIcon}
        name="AWS"
        role="back-end"
        color="#1A2B3C"
        level={5}
      />
      <SkillStackItem
        icon={terraformStackIcon}
        name="Terraform"
        role="database"
        color="#4479A1"
        level={4}
      />
      <SkillStackItem
        icon={kubernetesStackIcon}
        name="Kubernetes"
        role="front-end"
        color="#0f336c"
        level={5}
      />
      <SkillStackItem
        icon={simpleDockerIcon}
        name="Docker"
        role="tool"
        color="#066DA5"
        level={5}
      />
      <SkillStackItem
        icon={simpleSqlServerIcon}
        name="SQL Server"
        role="database"
        color="#D72D29"
        level={5}
      />
    </div>
  );
}

export default SkillStack;
