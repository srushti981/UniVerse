import { Users, CalendarDays, BookOpen } from "lucide-react";

export default function Features() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold">
          Everything You Need for Campus Life
        </h2>

        <p className="mt-4 text-center text-muted-foreground">
          One platform for everything happening on your campus.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500">
            <Users className="mb-4 h-10 w-10 text-violet-500" />

            <h3 className="text-2xl font-semibold">
              Communities
            </h3>

            <p className="mt-3 text-muted-foreground">
              Join clubs, coding groups, startup circles, sports teams and
              connect with like-minded students.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500">
            <CalendarDays className="mb-4 h-10 w-10 text-violet-500" />

            <h3 className="text-2xl font-semibold">
              Events
            </h3>

            <p className="mt-3 text-muted-foreground">
              Explore hackathons, workshops, fests and competitions happening
              across your campus.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500">
            <BookOpen className="mb-4 h-10 w-10 text-violet-500" />

            <h3 className="text-2xl font-semibold">
              Study Resources
            </h3>

            <p className="mt-3 text-muted-foreground">
              Access notes, PYQs, Survival Kits and curated resources shared by
              your seniors and classmates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}