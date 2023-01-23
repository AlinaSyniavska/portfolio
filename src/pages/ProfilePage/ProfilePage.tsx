import {FC} from "react";

import style from './ProfilePage.module.css';
import {ProfilePhoto} from "../../components";

const ProfilePage: FC = () => {
    return (
        <div className={style.wrapPage}>
            <div className={style.profile}>
                <ProfilePhoto
                    person={{
                        personName: 'Alina Syniavska',
                        personPosition: 'Trainee/Junior Frontend/Backend Developer'
                    }}
                />

            </div>
        </div>
    );
};

export {ProfilePage};

