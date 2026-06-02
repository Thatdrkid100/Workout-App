import { useEffect, useState } from "react";
import "./App.css";
import profilePfp from "./assets/profile.png";
import { DEFAULT_EXERCISE_IMAGE, EXERCISE_IMAGES } from "./exerciseImages.js";
import { PROFILE_NAV_ITEMS, ProfileNavIcon } from "./profileNavIcons.jsx";

function App() {
  const [sections, setSections] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch("http://127.0.0.1:8000/muscle-groups").then((res) => {
        if (!res.ok) throw new Error("Could not load muscle groups");
        return res.json();
      }),
      fetch("http://127.0.0.1:8000/exercises").then((res) => {
        if (!res.ok) throw new Error("Could not load exercises");
        return res.json();
      }),
    ])
      .then(([muscleGroups, exercises]) => {
        const byGroupId = new Map(
          muscleGroups.map((group) => [group.id, { group, exercises: [] }]),
        );
        for (const exercise of exercises) {
          byGroupId.get(exercise.muscle_group_id)?.exercises.push(exercise);
        }
        setSections([...byGroupId.values()]);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <aside className="profile-sidebar">
        <div className="profile-panel">
          <img src={profilePfp} alt="" className="profile-image" />
          <p className="profile-name">Bianchi Mena</p>
        </div>
        <p className="profile-name profile-about">About Me</p>
        <p className="profile-bio">
          My name is Bianchi, and fitness has been one of my biggest passions for years.
          Through my own experience with training and staying active, I've learned the value
          of consistency and having a plan. That's what inspired me to create this app—a
          place where you can organize workouts, stay motivated, and work toward your goals.
        </p>
        <nav className="profile-nav" aria-label="Site sections">
          {PROFILE_NAV_ITEMS.map(({ label, icon }) => (
            <div key={label} className="profile-nav-item">
              <ProfileNavIcon name={icon} />
              <span className="profile-name">{label}</span>
            </div>
          ))}
        </nav>
      </aside>
      <div className="app">
        <h1>Explore Workouts</h1>
      {error && <p className="error">{error}</p>}
      {sections.map(({ group, exercises }) => (
        <section key={group.id} className="muscle-group">
          <h2 className="muscle-group-title">{group.name}</h2>
          <div className="exercise-list">
            {exercises.map((exercise) => (
              <article key={exercise.id} className="exercise-card">
                <div className="exercise-card-body">
                  <h3 className="exercise-name">{exercise.name}</h3>
                  <hr className="exercise-divider" />
                  <p className="exercise-description">{exercise.description}</p>
                </div>
                <div className="exercise-card-media">
                  <img
                    src={EXERCISE_IMAGES[exercise.name] ?? DEFAULT_EXERCISE_IMAGE}
                    alt=""
                    className="exercise-image"
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
      </div>
    </>
  );
}

export default App;
