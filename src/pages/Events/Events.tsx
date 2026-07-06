import { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";
import EventCard from "../../components/Event/EventCard";

export default function Events() {
  const [search, setSearch] = useState("");

  const events = [
    {
      title: "AI Hackathon",
      category: "Hackathon",
      date: "18 July 2026",
      venue: "Main Auditorium",
      seats: 120,
      registered: false,
    },
    {
      title: "Web Development Workshop",
      category: "Workshop",
      date: "22 July 2026",
      venue: "Seminar Hall",
      seats: 40,
      registered: true,
    },
    {
      title: "Startup Pitch Day",
      category: "Competition",
      date: "30 July 2026",
      venue: "Innovation Centre",
      seats: 65,
      registered: false,
    },
    {
      title: "Cultural Fest Auditions",
      category: "Cultural",
      date: "5 August 2026",
      venue: "Open Air Theatre",
      seats: 200,
      registered: false,
    },
    {
      title: "Photography Walk",
      category: "Photography",
      date: "10 August 2026",
      venue: "Campus Grounds",
      seats: 35,
      registered: false,
    },
  ];

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.venue.toLowerCase().includes(search.toLowerCase()) ||
      event.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <section className="flex-1 p-10">
        <Topbar
          search={search}
          setSearch={setSearch}
          placeholder="Search events..."
        />

        <h1 className="text-4xl font-bold">
          Events
        </h1>

        <p className="mt-3 text-gray-400">
          Discover workshops, hackathons, seminars and campus activities.
        </p>

        <div className="mt-8 space-y-5">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.title}
              title={event.title}
              category={event.category}
              date={event.date}
              venue={event.venue}
              seats={event.seats}
              registered={event.registered}
            />
          ))}
        </div>
      </section>
    </main>
  );
}