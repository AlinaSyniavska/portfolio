import React from "react";
import {FC} from "react";

import style from './ProfileSkillsInfo.module.css';
import {SkillTitle} from "../SkillTitle/SkillTitle";
import {IPerson} from "../../interfaces";
import {Link} from "react-router-dom";

interface IProps {
    person: Partial<IPerson>,
}

const ProfileSkillsInfo: FC<IProps> = ({person}) => {
    const {education, languages, skills} = person;

    return (
        <React.Fragment>
            <div className={style.profileSkillsInfoContainer}>
                <div className={style.skillContainer}>
                    <div>
                        <SkillTitle title={'pet projects'}/>
                        <Link to={'/projects'} style={{textDecoration: 'none', color: '#222'}}>
                            <button className={style.btnProjectsLink}>
                                Go to Projects
                            </button>
                        </Link>
                    </div>

                    <div>
                        <SkillTitle title={'education'}/>
                        {
                            education?.map((unit, index) => (
                                <div key={index} className={style.skillUnit}>
                                    <p className={style.skillTitle}>{unit.university}</p>
                                    <p>{unit.specialization}</p>
                                    <p>{unit.years}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div>
                        <SkillTitle title={'language'}/>
                        {
                            languages?.map((unit, index) => (
                                <div key={index}>
                                    <p>{unit.language} - {unit.level}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div>
                        <SkillTitle title={'computer skills'}/>
                        {
                            skills?.map((unit, index) => (
                                <ul key={index}>
                                    <li>{unit}</li>
                                </ul>
                            ))
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export {ProfileSkillsInfo};