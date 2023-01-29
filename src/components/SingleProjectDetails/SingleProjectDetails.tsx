import React, {FC} from "react";
import {useLocation} from "react-router-dom";

import selfStyle from './SingleProjectDetails.module.css';
import style from '../../pages/ProfilePage/ProfilePage.module.css';
import {SimpleLink} from "../SimpleLink/SimpleLink";
import {IProject} from "../../interfaces";

interface IProps {
    project: IProps,
}

const SingleProjectDetails: FC = () => {

    const {state} = useLocation();
    const {title, description, stack, links: {front, back, image, website, video}} = state as IProject;

    return (
        <div className={style.wrapPage}>
            <div className={style.mainPageContainer}>
                <div className={style.linkContainer}>
                    <SimpleLink link={'/'} linkText={'Back to Home'}/>
                    <SimpleLink link={'/projects'} linkText={'Back to Projects'}/>
                </div>

                <div className={selfStyle.singleProjectDetailsContainer}>
                    <h1>{title}</h1>
                    <div className={selfStyle.singleProject}>
                        <div className={selfStyle.singleProjectImg}>
                            <img src={require(`../../media/${image}`)} alt={title}/>
                        </div>
                        <div className={selfStyle.singleProjectInfo}>
                            <div className={selfStyle.singleProjectInfoDescription}>
                                {description}
                            </div>
                            <div className={selfStyle.singleProjectInfoStack}>
                                {stack}
                            </div>
                            <div className={selfStyle.singleProjectInfoLinks}>
                                {front}
                            </div>
                        </div>

                    </div>
                </div>






            </div>
        </div>
    );
};

export {SingleProjectDetails};