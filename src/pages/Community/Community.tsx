import { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";
import CommunityCard from "../../components/Community/CommunityCard";

export default function Community() {
  const [search, setSearch] = useState("");

  const communities = [
    {
      name: "FACE Cultural Club",
      category: "Cultural",
      members: 342,
      joined: true,
    },
    {
      name: "FACE Groove & Rhythm",
      category: "Dance",
      members: 286,
      joined: false,
    },
    {
      name: "FACE Sports Club",
      category: "Sports",
      members: 174,
      joined: false,
    },
    {
      name: "FACE Creative Club",
      category: "Creative",
      members: 210,
      joined: true,
    },
    {
      name: "NSS",
      category: "Community Service",
      members: 498,
      joined: false,
    },
  ];

  const filteredCommunities = communities.filter(
    (community) =>
      community.name.toLowerCase().includes(search.toLowerCase()) ||
      community.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <section className="flex-1 p-10">
        <Topbar
          search={search}
          setSearch={setSearch}
          placeholder="Search communities..."
        />

        <h1 className="text-4xl font-bold">
          Communities
        </h1>

        <p className="mt-3 text-gray-400">
          Discover and join communities that match your interests.
        </p>

        <div className="mt-8 space-y-5">
          {filteredCommunities.map((community) => (
            <CommunityCard
              key={community.name}
              name={community.name}
              category={community.category}
              members={community.members}
              joined={community.joined}
            />
          ))}
        </div>
      </section>
    </main>
  );
}