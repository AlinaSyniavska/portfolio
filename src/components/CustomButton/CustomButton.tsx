import React, {FC} from "react";

import style from './CustomButton.module.css';

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    specialProp?: string,
}

const CustomButton: FC<ButtonProps> = (props) => {
    const { specialProp, ...rest } = props;

    return (
        <div className={style.customBtnContainer}>
            <button className={style.customBtn} {...rest} />
        </div>
    );
};

export {CustomButton};

