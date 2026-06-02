"""Default muscle groups and starter exercises for phase 0."""

MUSCLE_GROUPS = [
    # Shoulders
    {"slug": "front_delts", "name": "Front Delts", "body_region": "shoulders"},
    {"slug": "side_delts", "name": "Side Delts", "body_region": "shoulders"},
    {"slug": "rear_delts", "name": "Rear Delts", "body_region": "shoulders"},
    # Chest
    {"slug": "upper_chest", "name": "Upper Chest", "body_region": "chest"},
    {"slug": "mid_chest", "name": "Mid Chest", "body_region": "chest"},
    {"slug": "lower_chest", "name": "Lower Chest", "body_region": "chest"},
    # Back
    {"slug": "lats", "name": "Lats", "body_region": "back"},
    {"slug": "upper_back", "name": "Upper Back", "body_region": "back"},
    {"slug": "lower_back", "name": "Lower Back", "body_region": "back"},
    {"slug": "traps", "name": "Traps", "body_region": "back"},
    # Arms
    {"slug": "biceps", "name": "Biceps", "body_region": "arms"},
    {"slug": "triceps", "name": "Triceps", "body_region": "arms"},
    {"slug": "forearms", "name": "Forearms", "body_region": "arms"},
    # Core
    {"slug": "abs", "name": "Abs", "body_region": "core"},
    {"slug": "obliques", "name": "Obliques", "body_region": "core"},
    # Legs
    {"slug": "quads", "name": "Quads", "body_region": "legs"},
    {"slug": "hamstrings", "name": "Hamstrings", "body_region": "legs"},
    {"slug": "calves", "name": "Calves", "body_region": "legs"},
]

# slug -> list of (name, description)
STARTER_EXERCISES: dict[str, list[tuple[str, str]]] = {
    "front_delts": [
        (
            "Dumbbell Front Raise",
            "Raise dumbbells in front of you to shoulder height with a slight bend in the elbows.",
        ),
        (
            "Dumbbell Overhead Press",
            "Press dumbbells overhead; anterior delts are a primary mover.",
        ),
    ],
    "side_delts": [
        (
            "Dumbbell Lateral Raise",
            "Raise dumbbells out to the sides until arms are parallel to the floor.",
        ),
        (
            "Cable Lateral Raise",
            "Raise the handle out to the side with a slight bend in the elbow; constant cable tension on the medial delt.",
        ),
    ],
    "rear_delts": [
        (
            "Reverse Pec Deck",
            "Face the pec deck and pull handles back, squeezing rear delts.",
        ),
        (
            "Bent-Over Dumbbell Reverse Fly",
            "Hinge at the hips and raise dumbbells out to the sides behind you.",
        ),
    ],
    "upper_chest": [
        (
            "Incline Dumbbell Press",
            "Press on a 30–45° incline bench to emphasize the upper chest.",
        ),
        (
            "Incline Barbell Press",
            "Press the bar on an incline bench; targets the clavicular (upper) portion of the chest.",
        ),
    ],
    "mid_chest": [
        (
            "Flat Barbell Bench Press",
            "Press the bar on a flat bench for overall chest development.",
        ),
        (
            "Dumbbell Bench Press",
            "Press dumbbells on a flat bench; allows a deeper stretch and independent arm path.",
        ),
    ],
    "lower_chest": [
        (
            "Decline Dumbbell Press",
            "Press on a slight decline to target the lower chest.",
        ),
    ],
    "lats": [
        (
            "Lat Pulldown",
            "Pull the bar to the upper chest with a wide grip.",
        ),
        (
            "Wide-Grip Pull-Up",
            "Pull your chin over the bar with hands wider than shoulders; lats drive the movement.",
        ),
    ],
    "upper_back": [
        (
            "Chest-Supported Row",
            "Row with the chest on an incline pad to hit mid-back and rhomboids.",
        ),
    ],
    "lower_back": [
        (
            "Deadlift",
            "Hinge at the hips and stand up with the bar, keeping a neutral spine throughout.",
        ),
        (
            "Rack Pull",
            "Pull the bar from knee height or just below; emphasize lockout and lower back engagement.",
        ),
    ],
    "traps": [
        (
            "Dumbbell Shrug",
            "Shrug dumbbells straight up toward your ears; pause at the top, then lower with control.",
        ),
        (
            "Barbell Shrug",
            "Shrug a barbell in front of you or behind; squeeze traps at the top of each rep.",
        ),
    ],
    "biceps": [
        (
            "Dumbbell Curl",
            "Curl dumbbells with elbows pinned at your sides.",
        ),
        (
            "Preacher Curl",
            "Curl with upper arms braced on a preacher pad to isolate the biceps.",
        ),
    ],
    "triceps": [
        (
            "Cable Triceps Pushdown",
            "Extend the elbows and push the handle down.",
        ),
        (
            "JM Press",
            "Lower the bar with elbows tucked, then press up—hybrid of close-grip bench and extension for triceps.",
        ),
    ],
    "forearms": [
        (
            "Dumbbell Hammer Curl",
            "Curl dumbbells with a neutral grip; thumbs up, elbows at your sides.",
        ),
    ],
    "abs": [
        (
            "Hanging Leg Raise",
            "Hang from a bar and raise your legs until thighs are parallel to the floor or higher.",
        ),
        (
            "Ab Roller",
            "Roll forward from your knees or feet, keeping the core braced and hips stable.",
        ),
        (
            "Weighted Crunch",
            "Crunch with a plate or dumbbell on your chest; exhale as you lift your shoulders.",
        ),
    ],
    "obliques": [
        (
            "Cable Wood Chop",
            "Rotate diagonally across your body with a cable or band to hit the obliques.",
        ),
    ],
    "quads": [
        (
            "Barbell Squat",
            "Squat with the bar on your upper back; sit back and down, then drive up through mid-foot.",
        ),
        (
            "Pendulum Squat",
            "Squat on a pendulum machine for a fixed arc that keeps tension on the quads.",
        ),
        (
            "Dumbbell Lunge",
            "Step forward and lower until both knees are bent about 90°; alternate legs.",
        ),
        (
            "Leg Extension",
            "Extend your legs against the pad on a leg extension machine; control the negative.",
        ),
    ],
    "hamstrings": [
        (
            "Lying Leg Curl",
            "Curl your heels toward your glutes on a lying leg curl machine.",
        ),
        (
            "Seated Leg Curl",
            "Curl the pad down under the seat; squeeze hamstrings at the bottom.",
        ),
    ],
    "calves": [
        (
            "Standing Calf Raise",
            "Rise onto your toes at the top of each rep; pause briefly, then lower with control.",
        ),
    ],
}
