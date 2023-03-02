import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import style from "./SocialWebLink.module.css";

interface IProps {
  link: string | undefined;
  icon: IconDefinition;
  title: string;
  linkText?: string;
}

const SocialWebLink: FC<IProps> = ({ link, icon, title, linkText = link }) => {
  return (
    <div className={style.link}>
      <i>
        <FontAwesomeIcon icon={icon} title={title} />
      </i>
      <a href={link} target={"_blank"}>
        {linkText}
      </a>
    </div>
  );
};

export { SocialWebLink };
