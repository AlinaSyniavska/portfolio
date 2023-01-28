import {FC, useEffect} from "react";

import style from './MoveUpButton.module.css';

const MoveUpButton: FC = () => {

    const moveUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        const btn = document.getElementById('moveUpBtn') as HTMLElement;

        window.addEventListener('scroll', () => {
            if (btn) {
                btn.hidden = (window.scrollY < document.documentElement.clientHeight / 2);
            }
        });
    }, [])

    return (
        <div>
            <button onClick={moveUp} className={style.moveUpBtn} hidden={true} id={'moveUpBtn'}>Top</button>
        </div>
    );
};

export {MoveUpButton};
