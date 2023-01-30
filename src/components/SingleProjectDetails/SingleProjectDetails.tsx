import React, {FC, useEffect} from "react";
import {useLocation} from "react-router-dom";

import selfStyle from './SingleProjectDetails.module.css';
import style from '../../pages/ProfilePage/ProfilePage.module.css';
import {CustomLink} from "../CustomLink/CustomLink";
import {IProject} from "../../interfaces";
import {StackTechnologies} from "../StackTechnologies/StackTechnologies";
import {VideoPlayer} from "../VideoPlayer/VideoPlayer";
import {commonHelper} from "../../helpers";

interface IProps {
    project: IProps,
}

const SingleProjectDetails: FC = () => {
    const {state} = useLocation();
    const {title, description, stack, links: {front, back, image, website, video}} = state as IProject;

    useEffect(() => {
        commonHelper.moveToPageTop();
    }, [])

    return (
        <div className={style.wrapPage}>
            <div className={style.mainPageContainer}>
                <div className={style.linkContainer}>
                    <CustomLink link={'/'} linkText={'Back to Home'}/>
                    <CustomLink link={'/projects'} linkText={'Back to Projects'}/>
                </div>

                <div className={selfStyle.singleProjectDetailsContainer}>
                    <h1 className={selfStyle.singleProjectTitle}>{title}</h1>
                    <div className={selfStyle.singleProject}>
                        <div className={selfStyle.singleProjectImg}>
                            <img src={require(`../../media/${image}`)} alt={title}/>
                        </div>
                        <div className={selfStyle.singleProjectInfo}>
                            <div className={selfStyle.singleProjectInfoDescription}>
                                {description}
                            </div>
                            <div className={selfStyle.singleProjectInfoStack}>
                                <StackTechnologies stack={stack}/>
                            </div>
                        </div>
                    </div>

                    <h2>Source</h2>
                    <div className={selfStyle.singleProjectInfoLinks}>
                        <div>
                            {
                                video && <VideoPlayer videoUrl={video} width={'600px'} height={'400px'}/>
                            }
                        </div>
                        <div>
                            {
                                front && <CustomLink link={front} linkText={'Frontend'} isSelfRoute={false}/>
                            }
                            {
                                back && <CustomLink link={back} linkText={'Backend'} isSelfRoute={false}/>
                            }
                            {
                                website && <CustomLink link={website} linkText={'Website'} isSelfRoute={false}/>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export {SingleProjectDetails};
