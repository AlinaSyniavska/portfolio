import {FC} from "react";

import style from './ProfilePage.module.css';
import {ProfileName} from "../../components";

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





            </div>
        </div>
    );
};

export {ProfilePage};

