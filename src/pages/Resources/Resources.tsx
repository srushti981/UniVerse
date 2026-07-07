import { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";
import ResourceCard from "../../components/Resources/ResourceCard";

export default function Resources() {
  const [search, setSearch] = useState("");

  const subjects = [
    {
      name: "Database Management Systems",
    },
    {
      name: "Computer Networks",
    },
    {
      name: "Operating Systems",
    },
    {
      name: "Data Structures",
    },
    {
      name: "Machine Learning",
    },
  ];

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <section className="flex-1 p-10">
        <Topbar
          search={search}
          setSearch={setSearch}
          placeholder="Search subjects..."
        />

        <h1 className="text-4xl font-bold">
          Resources
        </h1>

        <p className="mt-3 text-gray-400">
          Access notes, PYQs and learning resources for every subject.
        </p>

        <div className="mt-8 space-y-6">
          {filteredSubjects.map((subject) => (
            <ResourceCard
              key={subject.name}
              subject={subject.name}
            />
          ))}
        </div>
      </section>
    </main>
  );
}