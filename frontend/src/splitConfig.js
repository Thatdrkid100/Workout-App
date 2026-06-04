/** Day slots per split (label + type). Duplicate types = same exercise added to each slot. */
export const SPLIT_DAY_SLOTS = {
  ppl: [
    { label: "Push", type: "push" },
    { label: "Pull", type: "pull" },
    { label: "Legs", type: "legs" },
    { label: "Rest", type: "rest" },
    { label: "Push", type: "push" },
    { label: "Pull", type: "pull" },
    { label: "Legs", type: "legs" },
  ],
  pplul: [
    { label: "Push", type: "push" },
    { label: "Pull", type: "pull" },
    { label: "Legs", type: "legs" },
    { label: "Rest", type: "rest" },
    { label: "Upper", type: "upper" },
    { label: "Lower", type: "lower" },
    { label: "Rest", type: "rest" },
  ],
  ul: [
    { label: "Upper", type: "upper" },
    { label: "Lower", type: "lower" },
    { label: "Rest", type: "rest" },
    { label: "Upper", type: "upper" },
    { label: "Lower", type: "lower" },
    { label: "Rest", type: "rest" },
    { label: "Rest", type: "rest" },
  ],
  bro: [
    { label: "Chest", type: "chest" },
    { label: "Back", type: "back" },
    { label: "Arms", type: "arms" },
    { label: "Legs", type: "legs" },
    { label: "Rest", type: "rest" },
    { label: "Rest", type: "rest" },
    { label: "Rest", type: "rest" },
  ],
};

/** Which training-day types an exercise belongs to (from muscle group). */
export function getExerciseDayTypes(exercise) {
  const region = exercise.muscle_group?.body_region;
  const slug = exercise.muscle_group?.slug;
  const types = new Set();

  if (region === "chest") {
    types.add("push");
    types.add("upper");
    types.add("chest");
  } else if (region === "shoulders") {
    if (slug === "rear_delts") {
      types.add("pull");
      types.add("upper");
    } else {
      types.add("push");
      types.add("upper");
    }
  } else if (region === "back") {
    types.add("pull");
    types.add("upper");
    types.add("back");
  } else if (region === "arms") {
    types.add("arms");
    types.add("upper");
    if (slug === "biceps" || slug === "forearms") types.add("pull");
    else types.add("push");
  } else if (region === "legs") {
    types.add("legs");
    types.add("lower");
  } else if (region === "core") {
    types.add("legs");
    types.add("lower");
  }

  return [...types];
}

export function createEmptyPlan(splitId, title) {
  return {
    splitId,
    title,
    slots: SPLIT_DAY_SLOTS[splitId].map((slot, index) => ({
      ...slot,
      slotKey: `${splitId}-${index}`,
      exercises: [],
    })),
  };
}

export function addExerciseToPlan(plan, exercise) {
  const dayTypes = getExerciseDayTypes(exercise);
  return {
    ...plan,
    slots: plan.slots.map((slot) =>
      slot.type !== "rest" && dayTypes.includes(slot.type)
        ? { ...slot, exercises: [...slot.exercises, exercise] }
        : slot,
    ),
  };
}
