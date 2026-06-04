const STORAGE_KEY = "workout-app-saved-programs";

export function loadSavedPrograms() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveProgram(plan) {
  const programs = loadSavedPrograms();
  const entry = {
    id: String(Date.now()),
    savedAt: new Date().toISOString(),
    splitId: plan.splitId,
    title: plan.title,
    slots: plan.slots.map(({ label, type, slotKey, exercises }) => ({
      label,
      type,
      slotKey,
      exercises: exercises.map((exercise) => ({
        id: exercise.id,
        name: exercise.name,
        description: exercise.description ?? null,
        muscle_group_id: exercise.muscle_group_id,
        muscle_group: exercise.muscle_group
          ? {
              name: exercise.muscle_group.name,
              slug: exercise.muscle_group.slug,
              body_region: exercise.muscle_group.body_region,
            }
          : null,
      })),
    })),
  };
  programs.unshift(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(programs));
  return entry;
}

export function planHasExercises(plan) {
  return plan?.slots?.some((slot) => slot.exercises.length > 0);
}
