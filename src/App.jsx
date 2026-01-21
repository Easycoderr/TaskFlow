// import Landing from "./pages/landingPage/Landing";
import { Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import LandingLayout from "./layouts/landingLayout";
import Landing from "./pages/Landing";
import UIStateProvider from "./context/UiStateProvider";

function App() {
  return (
    <UIStateProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route index element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route element={<LandingLayout />}>
          <Route path="/landing" element={<Landing />} />
        </Route>
      </Routes>
    </UIStateProvider>
  );
}

export default App;
