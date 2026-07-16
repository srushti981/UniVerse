import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  value: string;
  Icon: LucideIcon;
};

export default function StatCard({
  title,
  value,
  Icon,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-500">

      <Icon
        size={28}
        className="text-violet-400"
      />

      <p className="mt-5 text-gray-400">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-bold">
        {value}
      </h2>

    </div>
  );
}