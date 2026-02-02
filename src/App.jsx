// import Landing from "./pages/landingPage/Landing";
import { Navigate, Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import LandingLayout from "./layouts/landingLayout";
import Landing from "./pages/Landing";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>
      <Route element={<GuestRoute />}>
        <Route element={<LandingLayout />}>
          <Route index element={<Landing />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
