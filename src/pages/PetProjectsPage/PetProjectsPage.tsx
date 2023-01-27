import {FC} from "react";

import style from "../ProfilePage/ProfilePage.module.css";
import {Projects, SimpleLink} from "../../components";

const PetProjectsPage: FC = () => {
    return (
        <div className={style.wrapPage}>
            <div className={style.mainPageContainer}>
                <div className={style.linkContainer}>
                    <SimpleLink link={'/'} linkText={'Back to Home'}/>
                </div>

                <Projects/>
            </div>
        </div>
    );
};

export {PetProjectsPage};
