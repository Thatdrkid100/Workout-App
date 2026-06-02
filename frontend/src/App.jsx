import { useEffect, useState } from "react";
import "./App.css";
import { DEFAULT_EXERCISE_IMAGE, EXERCISE_IMAGES } from "./exerciseImages.js";

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
    <div className="app">
      <h1>Workout Program 💪</h1>
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
  );
}

export default App;
