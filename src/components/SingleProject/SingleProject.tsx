import React from "react";
import {FC} from "react";

import {IProject} from "../../interfaces";
import style from './SingleProject.module.css';
import {StackTechnologies} from "../StackTechnologies/StackTechnologies";

interface IProps {
    project: IProject,
}

const SingleProject: FC<IProps> = ({project}) => {
    const {title, stack, links: {image}} = project;

    return (
        <React.Fragment>
            <div className={style.singleProjectContainer}>
                <div className={style.singleProjectImg}>
                    {image &&
                        <img src={require(`../../media/${image}`)} alt={title}/>
                    }
                </div>

                <div className={style.singleProjectInfo}>
                    <h2 className={style.singleProjectTitle}>{title}</h2>
                    <StackTechnologies stack={stack}/>
                </div>
            </div>
        </React.Fragment>
    );
};

export {SingleProject};