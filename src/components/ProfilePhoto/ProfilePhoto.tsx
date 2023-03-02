import React from "react";
import { FC } from "react";

import style from "./ProfilePhoto.module.css";

const ProfilePhoto: FC = () => {
  return (
    <React.Fragment>
      <div className={style.profilePhotoContainer}>
        <img
          src={require("../../media/profilePhoto.jpg")}
          alt={"Person Photo"}
        />
      </div>
    </React.Fragment>
  );
};

export { ProfilePhoto };
