import React from "react";
import {FC} from "react";

import style from './ProfileName.module.css';
import {IPerson} from "../../interfaces";

interface IProps {
    person: Partial<IPerson>,
}

const ProfileName: FC<IProps> = ({person}) => {
    const {personName, personPosition} = person;

    console.log(person);

    return (
        <React.Fragment>
            <div className={style.profileNameContainer}>
                <h1>{personName}</h1>
                <p>{personPosition}</p>
            </div>
        </React.Fragment>
    );
};

export {ProfileName};