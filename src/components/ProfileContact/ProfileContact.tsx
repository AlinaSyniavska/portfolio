import {FC} from "react";
import {IPerson} from "../../interfaces";

interface IProps {
    contacts: Partial<IPerson>,
}

const ProfileContact: FC<IProps> = ({contacts}) => {
    return (
        <div>
            ProfileContact
        </div>
    );
};

export {ProfileContact};