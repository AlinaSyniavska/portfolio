import {FC} from "react";

import style from './StackTechnology.module.css';

interface IProps {
    stack: string[],
}

const StackTechnologies: FC<IProps> = ({stack}) => {
    return (
        <div className={style.stackTechnologiesContainer}>
            {
                stack &&
                stack.map((item, index) => <div key={index} className={style.technology}>{item}</div>)
            }
        </div>
    );
};

export {StackTechnologies};