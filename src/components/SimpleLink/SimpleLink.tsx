import React, {FC} from "react";

import style from './SimpleLink.module.css';
import {Link} from "react-router-dom";

interface IProps {
    link: string,
    linkText: string,
}

const SimpleLink: FC<IProps> = ({link, linkText}) => {
    return (
        <div className={style.linkContainer}>
            <Link to={link}>{linkText}</Link>
        </div>
    );
};

export {SimpleLink};