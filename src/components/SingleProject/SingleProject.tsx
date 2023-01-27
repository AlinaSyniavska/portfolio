import React from "react";
import {FC} from "react";

import {IProject} from "../../interfaces";
import style from './SingleProject.module.css';

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
                    <p>{stack}</p>
                    <h2>{title}</h2>
                </div>


            </div>
        </React.Fragment>
    );
};

export {SingleProject};