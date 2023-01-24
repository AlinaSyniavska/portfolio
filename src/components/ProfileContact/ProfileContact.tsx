import React, {FC} from "react";
import {
    faPhone,
    faLocationDot,
    faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {IPerson, ISocial} from "../../interfaces";
import {SocialWebLink} from "../SocialWebLink/SocialWebLink";
import style from '../../pages/ProfilePage/ProfilePage.module.css';
import {SocialLink} from "../SocialLink/SocialLink";

interface IProps {
    contacts: Partial<IPerson>,
}

const ProfileContact: FC<IProps> = ({contacts}) => {
    const {phone, city, email, socialLinks} = contacts;
    const {github, linkedin} = socialLinks as ISocial;

    return (
        <div>
            <div className={`${style.profileTitle} ${style.whiteText}`}>Contact me</div>
            <div className={`${style.profileText} ${style.whiteText} ${style.profileContactContainer}`}>
                <SocialLink link={phone} icon={faPhone} title={'phone'}/>
                <SocialLink link={city} icon={faLocationDot} title={'city'}/>
                <SocialLink link={email} icon={faSquareEnvelope} title={'email'}/>
                <SocialWebLink link={github} icon={faGithub} title={'github'}/>
                <SocialWebLink link={linkedin} icon={faLinkedin} title={'linkedin'}/>
            </div>
        </div>

    );
};

export {ProfileContact};