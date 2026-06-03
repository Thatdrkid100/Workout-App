import { useOutletContext } from "react-router-dom";

const SPLIT_SCHEDULES = {
  ppl: {
    title: "Push Pull Legs (PPL)",
    days: [
      "Monday — Push",
      "Tuesday — Pull",
      "Wednesday — Legs",
      "Thursday — Rest",
      "Friday — Push",
      "Saturday — Pull",
      "Sunday — Legs",
    ],
  },
  pplul: {
    title: "Push Pull Legs Upper Lower (PPLUL)",
    days: [
      "Monday — Push",
      "Tuesday — Pull",
      "Wednesday — Legs",
      "Thursday — Rest",
      "Friday — Upper",
      "Saturday — Lower",
      "Sunday — Rest",
    ],
  },
  ul: {
    title: "Upper Lower",
    days: [
      "Monday — Upper",
      "Tuesday — Lower",
      "Wednesday — Rest",
      "Thursday — Upper",
      "Friday — Lower",
      "Saturday — Rest",
      "Sunday — Rest",
    ],
  },
  bro: {
    title: "Bro Split",
    days: [
      "Monday — Chest",
      "Tuesday — Back",
      "Wednesday — Arms",
      "Thursday — Legs",
      "Friday — Rest",
      "Saturday — Rest",
      "Sunday — Rest",
    ],
  },
};

export default function WorkoutLibraryPage() {
  const { setSplitSchedule } = useOutletContext();

  const splits = [
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
      frequency: "4 days/week Monday Upper, Tuesday Lower, Wednesday Rest, Thursday Upper, Friday Lower, Saturday Rest, Sunday Rest",
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

  return (
    <div className="app">
      <header className="app-header">
        <h1>Workout Library</h1>
      </header>
      <div className="exercise-list">
        {splits.map((split) => (
          <article key={split.name} className="exercise-card split-card">
            <div className="exercise-card-body">
              <h3 className="exercise-name">
                {split.name}{" "}
                <span className="split-frequency">({split.frequency})</span>
              </h3>
              <hr className="exercise-divider" />
              <p className="exercise-description">{split.description}</p>
              <button
                type="button"
                className="split-view-btn"
                onClick={() =>
                  split.id && setSplitSchedule?.(SPLIT_SCHEDULES[split.id])
                }
              >
                View workout
              </button>
            </div>
            <div className="exercise-card-media split-card-badge" aria-hidden="true">
              {split.badge}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
