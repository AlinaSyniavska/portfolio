import React, {FC} from "react";

import style from './ProfilePage.module.css';
import {ProfileCommonInfo, ProfileContact, ProfileIntro, ProfileName, ProfilePhoto} from "../../components";
import {person} from "../../constants";

const ProfilePage: FC = () => {
    return (
        <div className={style.wrapPage}>
            <div className={style.profile}>
                <ProfileName person={person}/>

                <ProfileCommonInfo>
                    <ProfilePhoto/>
                    <div className={style.profileInfoContainer}>
                        <ProfileIntro/>
                        <ProfileContact contacts={person}/>
                    </div>
                </ProfileCommonInfo>


            </div>
        </div>
    );
};

export {ProfilePage};

