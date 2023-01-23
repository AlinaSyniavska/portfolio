import React from "react";
import {FC} from "react";

import style from './ProfilePhoto.module.css';
import {IPerson} from "../../interfaces";

interface IProps {
    person: Partial<IPerson>,
}

const ProfilePhoto: FC<IProps> = ({person}) => {
    const {personName, personPosition} = person;

    console.log(person);

    return (
        <React.Fragment>
            <div className={style.photoBackOne}>
                <h1>{personName}</h1>
                <p>{personPosition}</p>
            </div>
        </React.Fragment>
    );
};

export {ProfilePhoto};