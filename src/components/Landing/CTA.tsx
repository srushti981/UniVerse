import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 p-12 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Join Your Campus Community?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Discover communities, attend events, share resources and connect with
          students who share your interests.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="mt-8 rounded-xl bg-violet-600 px-8 py-3 font-semibold transition hover:bg-violet-700"
        >
          Get Started Free
        </button>
      </div>
    </section>
  );
}