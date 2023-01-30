import {FC, useEffect} from "react";

import style from "../ProfilePage/ProfilePage.module.css";
import {MoveUpButton, Projects, CustomLink} from "../../components";
import {commonHelper} from "../../helpers";

const PetProjectsPage: FC = () => {

    useEffect(() => {
        commonHelper.moveToPageTop();
    }, [])

    return (
        <div className={style.wrapPage}>
            <div className={style.mainPageContainer}>
                <div className={style.linkContainer}>
                    <CustomLink link={'/'} linkText={'Back to Home'}/>
                </div>

                <Projects/>

                <MoveUpButton/>
                <br/>
            </div>
        </div>
    );
};

export {PetProjectsPage};
