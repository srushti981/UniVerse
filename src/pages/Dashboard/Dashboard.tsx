import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";
import StatCard from "../../components/Dashboard/StatCard";
import EventCard from "../../components/Dashboard/EventCard";

import {
  Users,
  CalendarDays,
  BookOpen,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Communities",
      value: "12",
      Icon: Users,
    },
    {
      title: "Upcoming Events",
      value: "5",
      Icon: CalendarDays,
    },
    {
      title: "Resources Saved",
      value: "48",
      Icon: BookOpen,
    },
  ];

  const events = [
    {
      title: "AI Hackathon",
      date: "July 18 • Main Auditorium",
      registered: false,
    },
    {
      title: "Web Development Workshop",
      date: "July 22 • Seminar Hall",
      registered: true,
    },
    {
      title: "Startup Networking Meetup",
      date: "July 28 • Innovation Center",
      registered: false,
    },
  ];

  return (
    <main className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <section className="flex-1 p-10">
        <Topbar />

        {/* Hero */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-700/20 to-violet-900/10 p-8">
          <h1 className="text-4xl font-bold">
            Good Evening,
            <span className="text-violet-400"> Srushti</span>
          </h1>

          <p className="mt-3 text-gray-300">
            Welcome back to UniVerse.
            <br />
            Everything happening on your campus in one place.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              Icon={stat.Icon}
            />
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">
            Upcoming Events
          </h2>

          <div className="space-y-5">
            {events.map((event) => (
              <EventCard
                key={event.title}
                title={event.title}
                date={event.date}
                registered={event.registered}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}