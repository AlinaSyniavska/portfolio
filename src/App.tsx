import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {PetProjectsPage, ProfilePage} from "./pages";

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<ProfilePage/>}/>
                <Route path={'projects'} element={<PetProjectsPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};

