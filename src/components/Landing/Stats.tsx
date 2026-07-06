export default function Stats() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 text-center md:grid-cols-4">
        <div>
          <h2 className="text-4xl font-bold text-violet-500">50+</h2>
          <p className="mt-2 text-gray-400">Communities</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-violet-500">100+</h2>
          <p className="mt-2 text-gray-400">Events</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-violet-500">10K+</h2>
          <p className="mt-2 text-gray-400">Students</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-violet-500">500+</h2>
          <p className="mt-2 text-gray-400">Resources</p>
        </div>
      </div>
    </section>
  );
}