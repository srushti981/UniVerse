import {
  FileText,
  FileQuestion,
  Video,
  Download,
  ExternalLink,
} from "lucide-react";

type Props = {
  subject: string;
};

export default function ResourceCard({ subject }: Props) {
  const subjectColor =
    subject === "Database Management Systems"
      ? "text-violet-400"
      : subject === "Computer Networks"
      ? "text-blue-400"
      : subject === "Operating Systems"
      ? "text-green-400"
      : subject === "Data Structures"
      ? "text-orange-400"
      : "text-pink-400";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.18)]">
      
      <h2 className={`text-2xl font-semibold ${subjectColor}`}>
        {subject}
      </h2>

      <p className="mt-2 text-sm text-gray-400">
        Semester 5 • Core Subject
      </p>

      <div className="mt-6 space-y-3">

        {/* Notes */}
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">
          <div className="flex items-center gap-3">
            <FileText className="text-gray-300" size={20} />

            <div>
              <p className="font-medium">Notes</p>
              <p className="text-xs text-gray-500">PDF Notes</p>
            </div>
          </div>

          <button className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm transition hover:bg-violet-700">
            <Download size={16} />
            View
          </button>
        </div>

        {/* PYQs */}
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">
          <div className="flex items-center gap-3">
            <FileQuestion className="text-gray-300" size={20} />

            <div>
              <p className="font-medium">Previous Year Questions</p>
              <p className="text-xs text-gray-500">Question Bank</p>
            </div>
          </div>

          <button className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm transition hover:bg-violet-700">
            <Download size={16} />
            View
          </button>
        </div>

        {/* Playlist */}
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">
          <div className="flex items-center gap-3">
            <Video className="text-gray-300" size={20} />

            <div>
              <p className="font-medium">YouTube Playlist</p>
              <p className="text-xs text-gray-500">Video Lectures</p>
            </div>
          </div>

          <button className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm transition hover:bg-violet-700">
            <ExternalLink size={16} />
            Open
          </button>
        </div>

      </div>
    </div>
  );
}