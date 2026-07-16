export default function Testimonials() {
  const reviews = [
    {
      name: "Shyam",
      role: "CSE • 3rd Year",
      review:
        "UniVerse helped me discover hackathons and connect with amazing teammates.",
    },
    {
      name: "Chinnu",
      role: "ISE • 2nd Year",
      review:
        "Finding notes and previous year papers has never been this easy.",
    },
    {
      name: "Prathi",
      role: "ECE • 4th Year",
      review:
        "The community feature helped me meet seniors who guided me through placements.",
    },
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold">
          Loved by Students ❤️
        </h2>

        <p className="mt-4 text-center text-gray-400">
          See what students are saying about UniVerse.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <p className="italic text-gray-300">
                "{review.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-400">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}