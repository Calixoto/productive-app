import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { History } from "./pages/History";

import { Home } from "./pages/Home";
import { TaskBoard } from "./pages/TaskBoard";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/tasks" element={<TaskBoard />} />
      </Route>
    </Routes>
  );
}
