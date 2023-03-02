import { FC } from "react";

import style from "./Projects.module.css";
import { myProjects } from "../../constants";
import { SingleProject } from "../SingleProject/SingleProject";

const Projects: FC = () => {
  return (
    <div className={style.projectsContainer}>
      {myProjects &&
        myProjects.map((project, index) => (
          <SingleProject key={index} project={project} />
        ))}
    </div>
  );
};

export { Projects };
