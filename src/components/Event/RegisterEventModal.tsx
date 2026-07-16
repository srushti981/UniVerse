import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  eventName: string;
  category: string;
  onSubmit: () => void;
};

export default function RegisterEventModal({
  isOpen,
  onClose,
  eventName,
  category,
  onSubmit,
}: Props) {
  const [reason, setReason] = useState("");
  const [year, setYear] = useState("");
  const [department, setDepartment] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!reason.trim() || !year || !department) return;

    onSubmit();
    setReason("");
    setYear("");
    setDepartment("");
  };

  const question =
    {
      Hackathon: "What technologies are you interested in?",
      Workshop: "What do you hope to learn from this workshop?",
      Competition: "Have you participated in similar competitions before?",
      Cultural: "What role would you like to participate in?",
      Photography: "What type of photography interests you the most?",
    }[category] || "Why would you like to attend this event?";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#111111] p-8 text-white">

        <h2 className="text-2xl font-bold">
          Register for {eventName}
        </h2>

        <p className="mt-3 text-gray-400">
          {question}
        </p>

        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Tell us a little..."
          className="mt-5 h-28 w-full resize-none rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-violet-500"
        />

        {/* Year */}

        <div className="mt-6">
          <label className="mb-2 block text-sm text-gray-300">
            Current Year
          </label>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#1A1A1A] p-3 text-white outline-none transition focus:border-violet-500"
          >
            <option value="" className="bg-[#1A1A1A] text-white">
              Select Year
            </option>

            <option value="1st Year" className="bg-[#1A1A1A] text-white">
              1st Year
            </option>

            <option value="2nd Year" className="bg-[#1A1A1A] text-white">
              2nd Year
            </option>

            <option value="3rd Year" className="bg-[#1A1A1A] text-white">
              3rd Year
            </option>

            <option value="4th Year" className="bg-[#1A1A1A] text-white">
              4th Year
            </option>
          </select>
        </div>

        {/* Department */}

        <div className="mt-5">
          <label className="mb-2 block text-sm text-gray-300">
            Department
          </label>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#1A1A1A] p-3 text-white outline-none transition focus:border-violet-500"
          >
            <option value="" className="bg-[#1A1A1A] text-white">
              Select Department
            </option>

            <option value="CSE" className="bg-[#1A1A1A] text-white">
              CSE
            </option>

            <option value="CSE (AI & ML)" className="bg-[#1A1A1A] text-white">
              CSE (AI & ML)
            </option>

            <option value="ISE" className="bg-[#1A1A1A] text-white">
              ISE
            </option>

            <option value="ECE" className="bg-[#1A1A1A] text-white">
              ECE
            </option>

            <option value="EEE" className="bg-[#1A1A1A] text-white">
              EEE
            </option>

            <option value="Mechanical" className="bg-[#1A1A1A] text-white">
              Mechanical
            </option>

            <option value="Civil" className="bg-[#1A1A1A] text-white">
              Civil
            </option>

            <option value="MBA" className="bg-[#1A1A1A] text-white">
              MBA
            </option>
          </select>
        </div>

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={() => {
              setReason("");
              setYear("");
              setDepartment("");
              onClose();
            }}
            className="rounded-xl border border-white/10 px-5 py-2 transition hover:bg-white/5"
          >
            Cancel
          </button>

          <button
            disabled={!reason.trim() || !year || !department}
            onClick={handleSubmit}
            className={`rounded-xl px-5 py-2 font-medium transition ${
              reason.trim() && year && department
                ? "bg-violet-600 hover:bg-violet-700"
                : "cursor-not-allowed bg-violet-600/40 text-gray-400"
            }`}
          >
            Register
          </button>

        </div>

      </div>
    </div>
  );
}