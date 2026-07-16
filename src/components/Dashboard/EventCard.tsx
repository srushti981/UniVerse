type Props = {
  title: string;
  date: string;
  registered?: boolean;
};

export default function EventCard({
  title,
  date,
  registered = false,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500/40">
      <div>
        <h2 className="text-lg font-semibold">
          {title}
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          {date}
        </p>
      </div>

      {registered ? (
        <button
          disabled
          className="rounded-xl border border-violet-500 px-5 py-2 text-violet-300"
        >
          Registered
        </button>
      ) : (
        <button className="rounded-xl bg-violet-600 px-5 py-2 font-medium transition hover:bg-violet-700">
          Register
        </button>
      )}
    </div>
  );
}