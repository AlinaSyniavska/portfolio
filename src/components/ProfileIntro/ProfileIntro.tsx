import React from "react";
import {FC} from "react";

import style from '../../pages/ProfilePage/ProfilePage.module.css';

const ProfileIntro: FC = () => {

    return (
        <div>
            <div className={`${style.profileTitle} ${style.whiteText}`}>Profile</div>
            <div className={`${style.profileText} ${style.whiteText}`}>
                I have finished IT courses.
                I consider my self a responsible and orderly person, ready to always check my own strength and realize ambitions.
                I am looking forward for my first work experience.
            </div>
        </div>
    );
};

export {ProfileIntro};