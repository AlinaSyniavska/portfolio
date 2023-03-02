import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "./layouts";
import { PetProjectsPage, ProfilePage } from "./pages";
import { SingleProjectDetails } from "./components";

const App: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={<Navigate to={"home"} />} />
        <Route path={"home"} element={<ProfilePage />} />
        <Route path={"projects"} element={<PetProjectsPage />} />
        <Route path={"projects/:title"} element={<SingleProjectDetails />} />
      </Route>
    </Routes>
  );
};

export { App };
