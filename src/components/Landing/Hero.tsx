import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex min-h-[65vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
        🚀 The Social OS for Your Campus
      </p>

      <h1 className="max-w-4xl text-6xl font-extrabold leading-tight">
        Find Your{" "}
        <span className="text-violet-500">Community.</span>
        <br />
        Learn. Collaborate. Grow.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        UniVerse brings students together through communities, events,
        notes, projects, and collaborative Survival Kits.
      </p>

      <div className="mt-10 flex gap-4">
        <Link
          to="/register"
          className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
        >
          Join UniVerse
        </Link>

        <Link
          to="/community"
          className="rounded-xl border border-white/10 px-6 py-3 transition hover:border-violet-500"
        >
          Explore
        </Link>
      </div>
    </section>
  );
}