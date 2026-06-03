export default function WorkoutLibraryPage() {
  const splits = [
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
      frequency: "4 days/week - rest, then repeat",
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

  return (
    <div className="app">
      <header className="app-header">
        <h1>Workout Library</h1>
      </header>
      <div className="exercise-list">
        {splits.map((split) => (
          <article key={split.name} className="exercise-card">
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
        ))}
      </div>
    </div>
  );
}
