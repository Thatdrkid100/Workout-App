import { useEffect, useState } from "react";
import { loadSavedPrograms } from "../savedPrograms.js";

function ProgramDaySlots({ slots }) {
  return (
    <div className="saved-program-days">
      {slots.map((slot) => (
        <section key={slot.slotKey} className="workout-sidebar-section">
          <h3 className="workout-sidebar-day">{slot.label}</h3>
          {slot.type === "rest" ? (
            <p className="workout-sidebar-rest">Rest day</p>
          ) : slot.exercises.length === 0 ? (
            <p className="workout-sidebar-empty">No exercises</p>
          ) : (
            <ul className="workout-sidebar-list">
              {slot.exercises.map((exercise, i) => (
                <li key={`${slot.slotKey}-${exercise.id}-${i}`}>
                  <span className="workout-sidebar-exercise">{exercise.name}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

export default function MyProgramPage() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    setPrograms(loadSavedPrograms());
  }, []);

  return (
    <div className="app page-shell">
      <header className="app-header">
        <h1>My Program</h1>
      </header>
      {programs.length === 0 ? (
        <p className="page-lead">
          No saved programs yet. Build a workout on Create Workout and click Save.
        </p>
      ) : (
        <div className="saved-program-list">
          {programs.map((program) => (
            <article key={program.id} className="saved-program-card">
              <h2 className="saved-program-title">{program.title}</h2>
              <p className="saved-program-date">
                Saved {new Date(program.savedAt).toLocaleString()}
              </p>
              <ProgramDaySlots slots={program.slots} />
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
