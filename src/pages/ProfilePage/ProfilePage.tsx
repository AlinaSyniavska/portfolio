import React, {FC} from "react";

import style from './ProfilePage.module.css';
import {ProfileCommonInfo, ProfileIntro, ProfileName, ProfilePhoto} from "../../components";

const ProfilePage: FC = () => {
    return (
        <div className={style.wrapPage}>
            <div className={style.profile}>
                <ProfileName
                    person={{
                        personName: 'Alina Syniavska',
                        personPosition: 'Junior Frontend/Backend Developer'
                    }}
                />

                <ProfileCommonInfo>
                    <ProfilePhoto/>
                    <div className={style.profileInfoContainer}>
                        <ProfileIntro/>

                    </div>
                </ProfileCommonInfo>


            </div>
        </div>
    );
};

export {ProfilePage};

