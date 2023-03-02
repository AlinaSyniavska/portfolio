import React, { FC } from "react";

import style from "./CustomLink.module.css";
import { Link } from "react-router-dom";

interface IProps {
  link: string;
  linkText: string;
  isSelfRoute?: boolean;
}

const CustomLink: FC<IProps> = ({ link, linkText, isSelfRoute = true }) => {
  return (
    <div className={style.linkContainer}>
      {isSelfRoute ? (
        <Link to={link}>{linkText}</Link>
      ) : (
        <a href={link} target={"_blank"}>
          {linkText}
        </a>
      )}
    </div>
  );
};

export { CustomLink };
