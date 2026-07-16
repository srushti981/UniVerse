import { useState } from "react";
import {
  CalendarDays,
  MapPin,
  Users,
  Tag,
} from "lucide-react";

import RegisterEventModal from "./RegisterEventModal";
import RegistrationSuccessModal from "./RegistrationSuccessModal";

type Props = {
  title: string;
  category: string;
  date: string;
  venue: string;
  seats: number;
  registered?: boolean;
};

export default function EventCard({
  title,
  category,
  date,
  venue,
  seats,
  registered = false,
}: Props) {
  const [isRegistered, setIsRegistered] = useState(registered);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.18)]">

        <div className="flex items-start justify-between">

          <div>

            <h2 className="text-2xl font-semibold">
              {title}
            </h2>

            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
              <Tag size={14} />
              {category}
            </div>

          </div>

          {isRegistered ? (
            <button
              disabled
              className="cursor-not-allowed rounded-xl border border-violet-500 px-5 py-2 text-violet-300"
            >
              Registered
            </button>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="rounded-xl bg-violet-600 px-5 py-2 font-medium transition hover:bg-violet-700"
            >
              Register
            </button>
          )}

        </div>

        <div className="mt-6 space-y-3 text-gray-400">

          <div className="flex items-center gap-3">
            <CalendarDays size={18} />
            {date}
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={18} />
            {venue}
          </div>

          <div className="flex items-center gap-3">
            <Users size={18} />

            {seats > 50 ? (
              <span className="text-green-400">
                {seats} Seats Left • Plenty Available
              </span>
            ) : seats > 15 ? (
              <span className="text-yellow-400">
                {seats} Seats Left • Filling Fast
              </span>
            ) : (
              <span className="text-red-400">
                {seats} Seats Left • Almost Full
              </span>
            )}
          </div>

        </div>

      </div>

      <RegisterEventModal
        isOpen={showModal}
        eventName={title}
        category={category}
        onClose={() => setShowModal(false)}
        onSubmit={() => {
          setShowModal(false);
          setShowSuccessModal(true);
        }}
      />

      <RegistrationSuccessModal
        isOpen={showSuccessModal}
        eventName={title}
        onClose={() => {
          setShowSuccessModal(false);
          setIsRegistered(true);
        }}
      />
    </>
  );
}