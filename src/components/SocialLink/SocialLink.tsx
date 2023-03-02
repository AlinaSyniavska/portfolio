import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import style from "../SocialWebLink/SocialWebLink.module.css";

interface IProps {
  link: string | undefined;
  icon: IconDefinition;
  title: string;
}

const SocialLink: FC<IProps> = ({ link, icon, title }) => {
  return (
    <div className={style.link}>
      <i>
        <FontAwesomeIcon icon={icon} title={title} />
      </i>
      <p>{link}</p>
    </div>
  );
};

export { SocialLink };
