import {
  LayoutDashboard,
  Users,
  CalendarDays,
  BookOpen,
  User,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `flex w-full items-center gap-4 rounded-xl px-4 py-3 transition ${
      isActive
        ? "bg-violet-600 font-medium text-white"
        : "text-gray-300 hover:bg-white/5"
    }`;

  return (
    <aside className="h-screen w-64 shrink-0 border-r border-white/10 bg-[#0B0B0F] p-8">

      <h1 className="mb-12 text-3xl font-bold">
        <span className="text-violet-500">Uni</span>Verse
      </h1>

      <nav className="space-y-3">

        <NavLink to="/dashboard" className={linkStyle}>
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink to="/community" className={linkStyle}>
          <Users size={20} />
          Communities
        </NavLink>

        <NavLink to="/events" className={linkStyle}>
          <CalendarDays size={20} />
          Events
        </NavLink>

        <NavLink to="/resources" className={linkStyle}>
          <BookOpen size={20} />
          Resources
        </NavLink>

        <NavLink to="/profile" className={linkStyle}>
          <User size={20} />
          Profile
        </NavLink>

      </nav>
    </aside>
  );
}