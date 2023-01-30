import {FC, useEffect} from "react";

import style from './MoveUpButton.module.css';
import {CustomButton} from "../CustomButton/CustomButton";
import {commonHelper} from "../../helpers";

const MoveUpButton: FC = () => {

    useEffect(() => {
        const btn = document.getElementById('moveUpBtn') as HTMLElement;

        window.addEventListener('scroll', () => {
            if (btn) {
                btn.hidden = (window.scrollY < document.documentElement.clientHeight / 2);
            }
        });
    }, [])

    return (
        <div className={style.moveUpBtn}>
            <CustomButton onClick={commonHelper.moveToPageTop} hidden={true} id={'moveUpBtn'}>Top</CustomButton>
        </div>
    );
};

export {MoveUpButton};
