import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  communityName: string;
  onSubmit: () => void;
};

export default function JoinCommunityModal({
  isOpen,
  onClose,
  communityName,
  onSubmit,
}: Props) {
  const [reason, setReason] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!reason.trim()) return;

    onSubmit();
    setReason("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#111111] p-8 text-white">

        <h2 className="text-2xl font-bold">
          Join {communityName}
        </h2>

        <p className="mt-3 text-gray-400">
          What interests you about this community?
        </p>

        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Tell us why you'd like to join..."
          className="mt-5 h-32 w-full resize-none rounded-xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-violet-500"
        />

        <div className="mt-6 flex justify-end gap-4">

          <button
            onClick={() => {
              setReason("");
              onClose();
            }}
            className="rounded-xl border border-white/10 px-5 py-2 transition hover:bg-white/5"
          >
            Cancel
          </button>

          <button
            disabled={!reason.trim()}
            onClick={handleSubmit}
            className={`rounded-xl px-5 py-2 font-medium transition ${
              reason.trim()
                ? "bg-violet-600 hover:bg-violet-700"
                : "cursor-not-allowed bg-violet-600/40 text-gray-400"
            }`}
          >
            Join Community
          </button>

        </div>

      </div>
    </div>
  );
}