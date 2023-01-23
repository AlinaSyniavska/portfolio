import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faLocationDot,
    faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {IPerson} from "../../interfaces";

interface IProps {
    contacts: Partial<IPerson>,
}

const ProfileContact: FC<IProps> = ({contacts}) => {
    return (
        <div>
            <FontAwesomeIcon icon={faPhone} title={'Edit'}/>
            <FontAwesomeIcon icon={faLocationDot} title={'Edit'}/>
            <FontAwesomeIcon icon={faSquareEnvelope} title={'Edit'}/>
            <FontAwesomeIcon icon={faGithub} title={'Edit'}/>
            <FontAwesomeIcon icon={faLinkedin} title={'Edit'}/>
        </div>
    );
};

export {ProfileContact};