import React, {FC} from "react";
import {
    faPhone,
    faLocationDot,
    faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faFacebook,
    faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import {IPerson, ISocial} from "../../interfaces";
import {SocialWebLink} from "../SocialWebLink/SocialWebLink";
import style from '../../pages/ProfilePage/ProfilePage.module.css';
import {SocialLink} from "../SocialLink/SocialLink";

interface IProps {
    person: Partial<IPerson>,
}

const ProfileContact: FC<IProps> = ({person}) => {
    const {phone, city, email, socialLinks} = person;
    const {github, linkedin, facebook, telegram} = socialLinks as ISocial;

    return (
        <div>
            <div className={`${style.profileTitle} ${style.whiteText}`}>Contact me</div>
            <div className={`${style.profileText} ${style.whiteText} ${style.profileContactContainer}`}>
                {
                    phone && <SocialLink link={phone} icon={faPhone} title={'phone'}/>
                }
                {
                    city && <SocialLink link={city} icon={faLocationDot} title={'city'}/>
                }
                {
                    email && <SocialLink link={email} icon={faSquareEnvelope} title={'email'}/>
                }
                {
                    github && <SocialWebLink link={github} icon={faGithub} title={'github'}/>
                }
                {
                    linkedin && <SocialWebLink link={linkedin} icon={faLinkedin} title={'linkedin'}/>
                }
                {
                    facebook && <SocialWebLink link={facebook} icon={faFacebook} title={'facebook'}/>
                }
                {
                    telegram && <SocialWebLink link={telegram} icon={faTelegram} title={'telegram'}/>
                }
            </div>
        </div>
    );
};

export {ProfileContact};
