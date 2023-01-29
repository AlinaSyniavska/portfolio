import React from "react";
import {FC} from "react";

import {IProject} from "../../interfaces";
import style from './SingleProject.module.css';
import {StackTechnologies} from "../StackTechnologies/StackTechnologies";
import {Link} from "react-router-dom";

interface IProps {
    project: IProject,
}

const SingleProject: FC<IProps> = ({project}) => {
    const {title, stack, links: {image}} = project;

    return (
        <React.Fragment>
            <div className={style.singleProjectContainer}>
                <Link to={`${title}`} state={project}>
                    <div className={style.singleProjectImg}>
                        {image &&
                            <img src={require(`../../media/${image}`)} alt={title}/>
                        }
                    </div>
                </Link>

                <div className={style.singleProjectInfo}>
                    <Link to={`${title}`} state={project}>
                        <h2 className={style.singleProjectTitle}>{title}</h2>
                    </Link>
                    <StackTechnologies stack={stack}/>
                </div>
            </div>
        </React.Fragment>
    );
};

export {SingleProject};