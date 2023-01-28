import React, {FC} from "react";

import style from './ProfilePage.module.css';
import {
    MoveUpButton,
    ProfileCommonInfo,
    ProfileContact,
    ProfileIntro,
    ProfileName,
    ProfilePhoto,
    ProfileSkillsInfo
} from "../../components";
import {person} from "../../constants";

const ProfilePage: FC = () => {
    return (
        <div className={style.wrapPage}>
            <div className={style.mainPageContainer}>
                <ProfileName person={person}/>

                <ProfileCommonInfo>
                    <ProfilePhoto/>
                    <div className={style.profileInfoContainer}>
                        <ProfileIntro/>
                        <ProfileContact person={person}/>
                    </div>
                </ProfileCommonInfo>

                <ProfileSkillsInfo person={person}/>

                <MoveUpButton/>
            </div>
        </div>
    );
};

export {ProfilePage};

