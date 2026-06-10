import { useEffect, useState } from "react";
import { DEFAULT_EXERCISE_IMAGE, EXERCISE_IMAGES } from "../exerciseImages.js";

function WorkoutPagination({ className = "" }) {
  return (
    <nav
      className={`workout-pagination${className ? ` ${className}` : ""}`}
      aria-label="Workout pages"
    >
      <button type="button" className="pagination-arrow" aria-label="Previous page">
        ←
      </button>
      <div className="pagination-pages">
        <button type="button" className="pagination-page" aria-label="Page 1">
          1
        </button>
        <button type="button" className="pagination-page" aria-label="Page 2">
          2
        </button>
        <button type="button" className="pagination-page" aria-label="Page 3">
          3
        </button>
        <button type="button" className="pagination-page" aria-label="Page 4">
          4
        </button>
      </div>
      <button type="button" className="pagination-arrow" aria-label="Next page">
        →
      </button>
    </nav>
  );
}

export default function DashboardPage() {
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
      <header className="app-header">
        <h1>Explore Workouts</h1>
        <WorkoutPagination />
      </header>
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
                <button
                  type="button"
                  className="exercise-add-btn"
                  aria-label={`Add ${exercise.name}`}
                >
                  +
                </button>
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
      <WorkoutPagination className="workout-pagination--bottom" />
    </div>
  );
}
