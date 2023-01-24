import React, {FC} from "react";

import style from './ProfilePage.module.css';
import {ProfileCommonInfo, ProfileContact, ProfileIntro, ProfileName, ProfilePhoto} from "../../components";

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
                        <ProfileContact
                            contacts={{
                                phone: '066 020 3448',
                                city: 'Zaporizhzhya, Ukraine',
                                email: 'alina22syniavska@gmail.com',
                                socialLinks: {
                                    github: 'https://github.com/AlinaSyniavska',
                                    linkedin: 'https://linkedin.com/in/alina-syniavska-a77048249',
                                }
                            }}
                        />
                    </div>
                </ProfileCommonInfo>


            </div>
        </div>
    );
};

export {ProfilePage};

