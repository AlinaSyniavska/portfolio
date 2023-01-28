import {FC} from "react";

import style from "../ProfilePage/ProfilePage.module.css";
import {MoveUpButton, Projects, SimpleLink} from "../../components";

const PetProjectsPage: FC = () => {
    return (
        <div className={style.wrapPage}>
            <div className={style.mainPageContainer}>
                <div className={style.linkContainer}>
                    <SimpleLink link={'/'} linkText={'Back to Home'}/>
                </div>

                <Projects/>

                <MoveUpButton/>
                <br/>
            </div>
        </div>
    );
};

export {PetProjectsPage};
