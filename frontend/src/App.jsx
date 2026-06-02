import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import WorkoutLibraryPage from "./pages/WorkoutLibraryPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="workout-library" element={<WorkoutLibraryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
