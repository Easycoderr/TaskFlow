// import Landing from "./pages/landingPage/Landing";
import { Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/dashboard" index element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
