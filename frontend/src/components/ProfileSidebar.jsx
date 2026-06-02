import { NavLink } from "react-router-dom";
import profilePfp from "../assets/profile.png";
import { PROFILE_NAV_ITEMS, ProfileNavIcon } from "../profileNavIcons.jsx";

export default function ProfileSidebar() {
  return (
    <aside className="profile-sidebar">
      <div className="profile-panel">
        <img src={profilePfp} alt="" className="profile-image" />
        <p className="profile-name">Bianchi Mena</p>
      </div>
      <div className="profile-about-section">
        <p className="profile-name profile-about">About Me</p>
        <p className="profile-bio">
          My name is Bianchi, and fitness has been one of my biggest passions for years.
          Through my own experience with training and staying active, I&apos;ve learned the value
          of consistency and having a plan. That&apos;s what inspired me to create this app—a
          place where you can organize workouts, stay motivated, and work toward your goals.
        </p>
      </div>
      <nav className="profile-nav" aria-label="Site sections">
        {PROFILE_NAV_ITEMS.map(({ label, icon, path }) =>
          path ? (
            <NavLink
              key={label}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `profile-nav-item profile-nav-link${isActive ? " is-active" : ""}`
              }
            >
              <ProfileNavIcon name={icon} />
              <span className="profile-name">{label}</span>
            </NavLink>
          ) : (
            <div key={label} className="profile-nav-item profile-nav-item--disabled">
              <ProfileNavIcon name={icon} />
              <span className="profile-name">{label}</span>
            </div>
          ),
        )}
      </nav>
    </aside>
  );
}
