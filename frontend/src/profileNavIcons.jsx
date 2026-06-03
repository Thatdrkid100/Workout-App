export const PROFILE_NAV_ITEMS = [
  { label: "Dashboard", icon: "home", path: "/" },
  { label: "Workout Library", icon: "muscle", path: "/workout-library" },
  { label: "Create Workout", icon: "plus", path: "/create-workout" },
  { label: "Program Tracker", icon: "chart", path: "/program-tracker" },
  { label: "My Program", icon: "folder", path: "/my-program" },
  { label: "Exercise Database", icon: "workout", path: "/exercise-database" },
  { label: "Favorites", icon: "star", path: "/favorites" },
  { label: "Blog", icon: "notebook", path: "/blog" },
  { label: "Contact", icon: "phone", path: "/contact" },
  { label: "FAQ", icon: "help", path: "/faq" },
];

const paths = {
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
    </>
  ),
  muscle: (
    <>
      <path d="M8 14c0-3 2-6 4-6s4 3 4 6" />
      <path d="M6 10c2-4 5-6 6-6s4 2 6 6" />
      <circle cx="18" cy="8" r="2" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  chart: (
    <>
      <path d="M5 20V10M10 20V6M15 20v-8M20 20V4" />
    </>
  ),
  folder: (
    <>
      <path d="M4 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" />
    </>
  ),
  workout: (
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4M9 20l3-5 3 5M8 11h8" />
    </>
  ),
  star: (
    <path d="m12 4 2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L4.8 9.2l5-.7L12 4Z" />
  ),
  notebook: (
    <>
      <path d="M7 4h10a2 2 0 0 1 2 2v14H9a2 2 0 0 1-2-2V4Z" />
      <path d="M9 8h8M9 12h6M9 16h4" />
    </>
  ),
  phone: (
    <path d="M8 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm4 14v0" />
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 4.2 1.8c-.8.7-1.7 1.4-1.7 2.7M12 17h.01" />
    </>
  ),
};

export function ProfileNavIcon({ name }) {
  return (
    <span className="profile-nav-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </svg>
    </span>
  );
}
