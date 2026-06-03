import { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Outlet, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import profilePfp from "./assets/profile.png";
import { PROFILE_NAV_ITEMS, ProfileNavIcon } from "./profileNavIcons.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import WorkoutLibraryPage from "./pages/WorkoutLibraryPage.jsx";

function AppShell() {
  const { pathname } = useLocation();
  const [splitSchedule, setSplitSchedule] = useState(null);

  useEffect(() => {
    if (pathname !== "/workout-library") setSplitSchedule(null);
  }, [pathname]);

  return (
    <>
      <aside className="profile-sidebar">
        <div className="profile-panel">
          <img src={profilePfp} alt="" className="profile-image" />
          <p className="profile-name">Bianchi Mena</p>
        </div>
        <div className="profile-about-section">
          <p className="profile-name profile-about">About Me</p>
          <p className="profile-bio">
            My name is Bianchi, and fitness has been one of my biggest passions for years.
            Through my own experience with training and staying active, I&apos;ve learned the value
            of consistency and having a plan. That&apos;s what inspired me to create this app—a
            place where you can organize workouts, stay motivated, and work toward your goals.
          </p>
        </div>
        <nav className="profile-nav" aria-label="Site sections">
          {PROFILE_NAV_ITEMS.map(({ label, icon, path }) =>
            path ? (
              <NavLink
                key={label}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `profile-nav-item profile-nav-link${isActive ? " is-active" : ""}`
                }
              >
                <ProfileNavIcon name={icon} />
                <span className="profile-name">{label}</span>
              </NavLink>
            ) : (
              <div key={label} className="profile-nav-item profile-nav-item--disabled">
                <ProfileNavIcon name={icon} />
                <span className="profile-name">{label}</span>
              </div>
            ),
          )}
        </nav>
      </aside>
      {pathname === "/" && (
        <aside className="workout-sidebar">
          <h2 className="today-exercise-heading">Today&apos;s Exercises</h2>
          <p className="workout-day">Wednesday</p>
          <ul className="workout-plan">
            <li>Dumbbell lunges — 3 × 6, 45 pounds</li>
            <li>RDLs — 3 × 10, 50 pounds</li>
            <li>Quad extensions — 3 × 7, 175 pounds</li>
            <li>Hamstring curls — 3 × 14, 190 pounds</li>
            <li>Hanging leg raises — 3 × 15</li>
            <li>Ab roller — 3 × 6 (first 7, second 6, third 5)</li>
            <li>Incline 12% — 3.0 mph, 30 minutes, 1.53 miles, 244 calories</li>
          </ul>
          <p className="workout-consistency-label">Consistency</p>
          <p className="workout-consistency-value">7</p>
        </aside>
      )}
      {pathname === "/workout-library" && splitSchedule && (
        <aside className="workout-sidebar">
          <h2 className="today-exercise-heading">{splitSchedule.title}</h2>
          <p className="workout-day">Weekly schedule</p>
          <ul className="workout-plan">
            {splitSchedule.days.map((day) => (
              <li key={day}>{day}</li>
            ))}
          </ul>
        </aside>
      )}
      <Outlet context={{ setSplitSchedule }} />
    </>
  );
}

function PlaceholderPage({ title, message }) {
  return (
    <div className="app page-shell">
      <header className="app-header">
        <h1>{title}</h1>
      </header>
      <p className="page-lead">{message}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<DashboardPage />} />
          <Route path="workout-library" element={<WorkoutLibraryPage />} />
          <Route
            path="program-tracker"
            element={
              <PlaceholderPage
                title="Program Tracker"
                message="Track your program progress and consistency here. Routing to Program Tracker is working."
              />
            }
          />
          <Route
            path="my-program"
            element={
              <PlaceholderPage
                title="My Program"
                message="Build and manage your training program here. Routing to My Program is working."
              />
            }
          />
          <Route
            path="exercise-database"
            element={
              <PlaceholderPage
                title="Exercise Database"
                message="Browse and search the full exercise database here. Routing to Exercise Database is working."
              />
            }
          />
          <Route
            path="favorites"
            element={
              <PlaceholderPage
                title="Favorites"
                message="Your saved workouts and exercises will appear here. Routing to Favorites is working."
              />
            }
          />
          <Route
            path="create-workout"
            element={
              <PlaceholderPage
                title="Create Workout"
                message="Build a custom workout here. Routing to Create Workout is working."
              />
            }
          />
          <Route
            path="blog"
            element={
              <PlaceholderPage
                title="Blog"
                message="Articles and updates will appear here. Routing to Blog is working."
              />
            }
          />
          <Route
            path="contact"
            element={
              <PlaceholderPage
                title="Contact"
                message="Get in touch here. Routing to Contact is working."
              />
            }
          />
          <Route
            path="faq"
            element={
              <PlaceholderPage
                title="FAQ"
                message="Frequently asked questions will appear here. Routing to FAQ is working."
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
