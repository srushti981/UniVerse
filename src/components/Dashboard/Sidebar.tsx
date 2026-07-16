import {
  LayoutDashboard,
  Users,
  CalendarDays,
  BookOpen,
  User,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Communities",
      path: "/community",
      icon: Users,
    },
    {
      name: "Events",
      path: "/events",
      icon: CalendarDays,
    },
    {
      name: "Resources",
      path: "/resources",
      icon: BookOpen,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
  ];

  return (
    <aside className="h-screen w-64 shrink-0 border-r border-white/10 bg-[#0B0B0F] p-8">
      <h1 className="mb-12 text-3xl font-bold">
        <span className="text-violet-500">Uni</span>Verse
      </h1>

      <nav className="space-y-3">
        {links.map((link) => {
          const Icon = link.icon;
          const active = location.pathname === link.path;

          return (
            <Link
              key={link.name}
              to={link.path}
              className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 font-medium transition ${
                active
                  ? "bg-violet-600 text-white"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              <Icon size={20} />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}