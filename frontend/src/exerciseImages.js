/** Line-art illustrations (consistent style) from yuhonas/free-exercise-db (public domain). */
const base =
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises";

const img = (path) => `${base}/${path}`;

export const EXERCISE_IMAGES = {
  "Dumbbell Front Raise": img("Front_Dumbbell_Raise/0.jpg"),
  "Dumbbell Overhead Press": img("Dumbbell_Shoulder_Press/0.jpg"),
  "Dumbbell Lateral Raise": img("Seated_Side_Lateral_Raise/0.jpg"),
  "Cable Lateral Raise": img("Cable_Seated_Lateral_Raise/0.jpg"),
  "Reverse Pec Deck": img("Reverse_Machine_Flyes/0.jpg"),
  "Bent-Over Dumbbell Reverse Fly": img(
    "Bent_Over_Dumbbell_Rear_Delt_Raise_With_Head_On_Bench/0.jpg",
  ),
  "Incline Dumbbell Press": img("Incline_Dumbbell_Press/0.jpg"),
  "Incline Barbell Press": img("Barbell_Incline_Bench_Press_-_Medium_Grip/0.jpg"),
  "Flat Barbell Bench Press": img("Barbell_Bench_Press_-_Medium_Grip/0.jpg"),
  "Dumbbell Bench Press": img("Dumbbell_Bench_Press/0.jpg"),
  "Decline Dumbbell Press": img("Decline_Dumbbell_Bench_Press/0.jpg"),
  "Lat Pulldown": img("Close-Grip_Front_Lat_Pulldown/0.jpg"),
  "Wide-Grip Pull-Up": img("Wide-Grip_Rear_Pull-Up/0.jpg"),
  "Chest-Supported Row": img("Dumbbell_Incline_Row/0.jpg"),
  "Deadlift": img("Barbell_Deadlift/0.jpg"),
  "Rack Pull": img("Rack_Pull_with_Bands/0.jpg"),
  "Dumbbell Shrug": img("Dumbbell_Shrug/0.jpg"),
  "Barbell Shrug": img("Barbell_Shrug/0.jpg"),
  "Dumbbell Curl": img("Dumbbell_Bicep_Curl/0.jpg"),
  "Preacher Curl": img("Cable_Preacher_Curl/0.jpg"),
  "Cable Triceps Pushdown": img("Triceps_Pushdown/0.jpg"),
  "JM Press": img("JM_Press/0.jpg"),
  "Dumbbell Hammer Curl": img("Hammer_Curls/0.jpg"),
  "Hanging Leg Raise": img("Hanging_Leg_Raise/0.jpg"),
  "Ab Roller": img("Ab_Roller/0.jpg"),
  "Weighted Crunch": img("Weighted_Crunches/0.jpg"),
  "Cable Wood Chop": img("Standing_Cable_Wood_Chop/0.jpg"),
  "Barbell Squat": img("Barbell_Full_Squat/0.jpg"),
  "Pendulum Squat": img("Barbell_Hack_Squat/0.jpg"),
  "Dumbbell Lunge": img("Dumbbell_Lunges/0.jpg"),
  "Leg Extension": img("Single-Leg_Leg_Extension/0.jpg"),
  "Lying Leg Curl": img("Lying_Leg_Curls/0.jpg"),
  "Seated Leg Curl": img("Seated_Leg_Curl/0.jpg"),
  "Standing Calf Raise": img("Rocking_Standing_Calf_Raise/0.jpg"),
};

export const DEFAULT_EXERCISE_IMAGE = img("Dumbbell_Bicep_Curl/0.jpg");
