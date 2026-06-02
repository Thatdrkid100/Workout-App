import { Outlet, useLocation } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar.jsx";
import WorkoutSidebar from "./WorkoutSidebar.jsx";

export default function AppLayout() {
  const { pathname } = useLocation();
  const showWorkoutSidebar = pathname === "/";

  return (
    <>
      <ProfileSidebar />
      {showWorkoutSidebar && <WorkoutSidebar />}
      <Outlet />
    </>
  );
}
