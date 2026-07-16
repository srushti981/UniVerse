import { useState } from "react";
import { Bell, Search } from "lucide-react";

type Props = {
  search?: string;
  setSearch?: (value: string) => void;
  placeholder?: string;
  hideSearch?: boolean;
};

export default function Topbar({
  search,
  setSearch,
  placeholder = "Search...",
  hideSearch = false,
}: Props) {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    "Your request to join FACE Creative Club is under review.",
    "You're registered for AI Hackathon.",
    "New DBMS notes have been uploaded.",
    "Startup Pitch Day starts in 2 days.",
  ];

  return (
    <header
      className={`relative mb-8 flex items-center ${
        hideSearch ? "justify-end" : "justify-between"
      }`}
    >
      {!hideSearch && (
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
      )}

      <div className="relative">
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-violet-500"
        >
          <Bell size={20} />
        </button>

        {showNotifications && (
          <div className="absolute right-0 z-50 mt-3 w-96 rounded-2xl border border-white/10 bg-[#111111] p-5 shadow-2xl">
            <h2 className="mb-4 text-lg font-semibold">
              Notifications
            </h2>

            <div className="space-y-3">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-gray-300"
                >
                  {notification}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}