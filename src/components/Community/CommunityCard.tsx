import { useState } from "react";
import JoinCommunityModal from "./JoinCommunityModal";
import RequestSentModal from "./RequestSentModal";

type Props = {
  name: string;
  category: string;
  members: number;
  joined?: boolean;
};

export default function CommunityCard({
  name,
  category,
  members,
  joined = false,
}: Props) {
  const [status, setStatus] = useState<"join" | "requested" | "joined">(
    joined ? "joined" : "join"
  );

  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.18)]">
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>

          <p className="mt-2 text-sm text-gray-400">
            {category} • {members} Members
          </p>
        </div>

        {status === "join" && (
          <button
            onClick={() => setShowJoinModal(true)}
            className="rounded-xl bg-violet-600 px-5 py-2 font-medium transition hover:bg-violet-700"
          >
            Join
          </button>
        )}

        {status === "requested" && (
          <button
            disabled
            className="cursor-not-allowed rounded-xl border border-amber-500 px-5 py-2 text-amber-300"
          >
            Request Sent
          </button>
        )}

        {status === "joined" && (
          <button
            disabled
            className="cursor-not-allowed rounded-xl border border-violet-500 px-5 py-2 text-violet-300"
          >
            Joined
          </button>
        )}
      </div>

      <JoinCommunityModal
        isOpen={showJoinModal}
        communityName={name}
        onClose={() => setShowJoinModal(false)}
        onSubmit={() => {
          setShowJoinModal(false);
          setShowSuccessModal(true);
        }}
      />

      <RequestSentModal
        isOpen={showSuccessModal}
        communityName={name}
        onClose={() => {
          setShowSuccessModal(false);
          setStatus("requested");
        }}
      />
    </>
  );
}