import { CheckCircle2 } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  eventName: string;
};

export default function RegistrationSuccessModal({
  isOpen,
  onClose,
  eventName,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111111] p-8 text-center text-white">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
          <CheckCircle2
            size={42}
            className="text-green-400"
          />
        </div>

        <h2 className="mt-5 text-2xl font-bold">
          Registration Successful!
        </h2>

        <p className="mt-4 text-gray-400">
          You're successfully registered for{" "}
          <span className="font-semibold text-white">
            {eventName}
          </span>.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          A confirmation email and event reminder will be sent to you.
        </p>

        <button
          onClick={onClose}
          className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-medium transition hover:bg-violet-700"
        >
          Close
        </button>

      </div>
    </div>
  );
}