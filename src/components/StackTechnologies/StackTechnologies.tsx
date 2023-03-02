import { FC } from "react";

import style from "./StackTechnologies.module.css";

interface IProps {
  stack: string[];
}

const StackTechnologies: FC<IProps> = ({ stack }) => {
  return (
    <div className={style.stackTechnologiesContainer}>
      {stack &&
        stack.map((item, index) => (
          <div key={index} className={style.technology}>
            {item}
          </div>
        ))}
    </div>
  );
};

export { StackTechnologies };
