import {FC} from "react";

import style from "../ProfilePage/ProfilePage.module.css";
import selfStyle from "./PetProjectsPage.module.css";
import {Projects, SimpleLink} from "../../components";

const PetProjectsPage: FC = () => {
    return (
        <div className={style.wrapPage}>
            <div className={style.mainPageContainer}>
                <div className={selfStyle.linkContainer}>
                    <SimpleLink link={'/'} linkText={'Back to Home'}/>
                </div>

            <Projects/>


            </div>
        </div>
    );
};

export {PetProjectsPage};