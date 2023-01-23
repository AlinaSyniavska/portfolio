import React, {ReactNode} from "react";
import {FC} from "react";

import style from './ProfileCommonInfo.module.css';

interface IProps {
    children: ReactNode
}

const ProfileCommonInfo: FC<IProps> = ({children}) => {
    return (
        <React.Fragment>
            <div className={style.profileCommonInfoContainer}>
                {children}
            </div>
        </React.Fragment>
    );
};

export {ProfileCommonInfo};