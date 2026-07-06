import { Bell, Search } from "lucide-react";

type Props = {
  search?: string;
  setSearch?: (value: string) => void;
  placeholder?: string;
};

export default function Topbar({
  search,
  setSearch,
  placeholder = "Search...",
}: Props) {
  return (
    <header className="mb-10 flex items-center justify-between">
      <div className="relative w-[420px]">
        <Search
          className="absolute left-4 top-3 text-gray-500"
          size={18}
        />

        <input
          type="text"
          placeholder={placeholder}
          value={search ?? ""}
          onChange={(e) => setSearch?.(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 outline-none transition focus:border-violet-500"
        />
      </div>

      <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-violet-500">
        <Bell size={20} />
      </button>
    </header>
  );
}