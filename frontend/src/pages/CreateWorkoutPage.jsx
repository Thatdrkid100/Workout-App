import { useState } from "react";

const SPLITS = [
  {
    name: "Push Pull Legs (PPL)",
    badge: "PPL",
    frequency: "6 days/week - each day twice",
    description:
      "Push (chest, shoulders, triceps), pull (back, biceps), and legs (quads, hamstrings, glutes, calves). Balanced volume with recovery between movement patterns.",
  },
  {
    name: "Push Pull Legs Upper Lower (PPLUL)",
    badge: "PPLUL",
    frequency: "5 days/week",
    description:
      "Push, pull, legs, plus dedicated upper and lower days. Full-body coverage with extra upper/lower frequency.",
  },
  {
    name: "Upper Lower",
    badge: "UL",
    frequency: "4 days/week",
    description:
      "Alternating upper body (chest, back, shoulders, arms) and lower body (quads, hamstrings, glutes, calves). Simple structure for strength and hypertrophy.",
  },
  {
    name: "Bro Split",
    badge: "BRO",
    frequency: "4 days/week - rest, then repeat",
    description:
      "Chest one day, back one day, arms one day, and legs on the fourth day. Hit each muscle group once per cycle, rest, then start again.",
  },
];

export default function CreateWorkoutPage() {
  const [index, setIndex] = useState(0);
  const split = SPLITS[index];
  const count = SPLITS.length;

  const goPrev = () => setIndex((i) => (i + count - 1) % count);
  const goNext = () => setIndex((i) => (i + 1) % count);

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
          className="exercise-card split-card split-carousel-card"
          aria-live="polite"
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
    </div>
  );
}
