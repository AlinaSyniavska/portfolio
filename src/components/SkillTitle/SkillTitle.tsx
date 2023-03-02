import React, { FC } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./SkillTitle.module.css";

interface IProps {
  title: string;
}

const SkillTitle: FC<IProps> = ({ title }) => {
  return (
    <div className={style.skillTitleContainer}>
      <i>
        <FontAwesomeIcon icon={faChevronRight} />
        <FontAwesomeIcon icon={faChevronRight} />
      </i>
      <p className={style.skillTitle}>{title}</p>
    </div>
  );
};

export { SkillTitle };
