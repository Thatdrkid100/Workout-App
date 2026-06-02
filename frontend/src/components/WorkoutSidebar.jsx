export default function WorkoutSidebar() {
  return (
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
  );
}
