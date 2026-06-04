import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { DEFAULT_EXERCISE_IMAGE, EXERCISE_IMAGES } from "../exerciseImages.js";
import { planHasExercises, saveProgram } from "../savedPrograms.js";
import { addExerciseToPlan, createEmptyPlan } from "../splitConfig.js";

const SPLITS = [
  {
    id: "ppl",
    name: "Push Pull Legs (PPL)",
    badge: "PPL",
    frequency: "6 days/week - each day twice",
    description:
      "Push (chest, shoulders, triceps), pull (back, biceps), and legs (quads, hamstrings, glutes, calves). Balanced volume with recovery between movement patterns.",
  },
  {
    id: "pplul",
    name: "Push Pull Legs Upper Lower (PPLUL)",
    badge: "PPLUL",
    frequency: "5 days/week",
    description:
      "Push, pull, legs, plus dedicated upper and lower days. Full-body coverage with extra upper/lower frequency.",
  },
  {
    id: "ul",
    name: "Upper Lower",
    badge: "UL",
    frequency: "4 days/week",
    description:
      "Alternating upper body (chest, back, shoulders, arms) and lower body (quads, hamstrings, glutes, calves). Simple structure for strength and hypertrophy.",
  },
  {
    id: "bro",
    name: "Bro Split",
    badge: "BRO",
    frequency: "4 days/week - rest, then repeat",
    description:
      "Chest one day, back one day, arms one day, and legs on the fourth day. Hit each muscle group once per cycle, rest, then start again.",
  },
];

export default function CreateWorkoutPage() {
  const { setCreateWorkoutPlan, createWorkoutPlan } = useOutletContext();
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);
  const [saveMessage, setSaveMessage] = useState(null);
  const split = SPLITS[index];
  const count = SPLITS.length;

  useEffect(() => {
    fetch("http://127.0.0.1:8000/exercises")
      .then((res) => {
        if (!res.ok) throw new Error("Could not load exercises");
        return res.json();
      })
      .then(setExercises)
      .catch((err) => setError(err.message));
  }, []);

  const goPrev = () =>
    setIndex((i) => {
      const next = (i + count - 1) % count;
      if (selectedIndex !== null) setSelectedIndex(next);
      return next;
    });
  const goNext = () =>
    setIndex((i) => {
      const next = (i + 1) % count;
      if (selectedIndex !== null) setSelectedIndex(next);
      return next;
    });

  const selectSplit = (i) => {
    setIndex(i);
    setSelectedIndex(i);
  };

  useEffect(() => {
    if (selectedIndex === null) {
      setCreateWorkoutPlan?.(null);
      return;
    }
    setSaveMessage(null);
    const chosen = SPLITS[selectedIndex];
    setCreateWorkoutPlan?.(createEmptyPlan(chosen.id, chosen.name));
  }, [selectedIndex, setCreateWorkoutPlan]);

  const handleAddExercise = (exercise) => {
    setSaveMessage(null);
    setCreateWorkoutPlan?.((plan) =>
      plan ? addExerciseToPlan(plan, exercise) : plan,
    );
  };

  const handleSave = () => {
    if (!createWorkoutPlan || !planHasExercises(createWorkoutPlan)) return;
    saveProgram(createWorkoutPlan);
    setSaveMessage("Saved to My Program.");
  };

  const canSave = createWorkoutPlan && planHasExercises(createWorkoutPlan);

  return (
    <div className="app page-shell">
      <header className="app-header">
        <h1>Create Workout</h1>
      </header>
      <p className="page-lead">Choose a training split to get started.</p>
      <h2 className="split-carousel-heading">Choose a workout split</h2>
      <div className="split-carousel" role="region" aria-label="Training splits">
        <button
          type="button"
          className="pagination-arrow split-carousel-arrow"
          aria-label="Previous split"
          onClick={goPrev}
        >
          ←
        </button>
        <article
          key={split.name}
          role="button"
          tabIndex={0}
          className={`exercise-card split-card split-carousel-card${
            selectedIndex === index ? " split-carousel-card--selected" : ""
          }`}
          aria-live="polite"
          aria-pressed={selectedIndex === index}
          onClick={() => selectSplit(index)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              selectSplit(index);
            }
          }}
        >
          <div className="exercise-card-body">
            <h3 className="exercise-name">
              {split.name}{" "}
              <span className="split-frequency">({split.frequency})</span>
            </h3>
            <hr className="exercise-divider" />
            <p className="exercise-description">{split.description}</p>
          </div>
          <div className="exercise-card-media split-card-badge" aria-hidden="true">
            {split.badge}
          </div>
        </article>
        <button
          type="button"
          className="pagination-arrow split-carousel-arrow"
          aria-label="Next split"
          onClick={goNext}
        >
          →
        </button>
      </div>
      <p className="split-carousel-indicator" aria-hidden="true">
        {index + 1} / {count}
      </p>
      {error && <p className="error">{error}</p>}
      {selectedIndex !== null && (
        <>
          <p className="workout-pick-heading">Click Plus to add a workout.</p>
          <div className="workout-pick-grid" aria-label="Exercises from your library">
            {exercises.map((exercise) => (
              <article key={exercise.id} className="workout-pick-card">
                <div className="workout-pick-card-media">
                  <img
                    src={EXERCISE_IMAGES[exercise.name] ?? DEFAULT_EXERCISE_IMAGE}
                    alt=""
                    className="exercise-image"
                    loading="lazy"
                  />
                </div>
                <div className="workout-pick-card-body">
                  <h3 className="exercise-name">{exercise.name}</h3>
                  <p className="workout-pick-group">{exercise.muscle_group?.name}</p>
                  {exercise.description && (
                    <p className="exercise-description">{exercise.description}</p>
                  )}
                  <button
                    type="button"
                    className="exercise-add-btn workout-pick-add-btn"
                    aria-label={`Add ${exercise.name}`}
                    onClick={() => handleAddExercise(exercise)}
                  >
                    +
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="create-workout-save-wrap">
            <button
              type="button"
              className="create-workout-save-btn"
              disabled={!canSave}
              onClick={handleSave}
            >
              Save
            </button>
            {saveMessage && <p className="create-workout-save-msg">{saveMessage}</p>}
          </div>
        </>
      )}
    </div>
  );
}
