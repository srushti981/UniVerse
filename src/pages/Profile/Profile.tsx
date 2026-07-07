import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";
import {
  Mail,
  GraduationCap,
  Building2,
  Calendar,
  Users,
  BookOpen,
} from "lucide-react";

export default function Profile() {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <section className="flex-1 px-10 pt-8 pb-10">
        <Topbar hideSearch />

        <h1 className="text-4xl font-bold">
          My Profile
        </h1>

        <p className="mt-2 text-gray-400">
          View your academic profile and account details.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">

          {/* Profile Header */}

          <div className="flex flex-col items-center">

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-violet-600 text-4xl font-bold">
              S
            </div>

            <h2 className="mt-4 text-3xl font-bold">
              Srushti Hiremath
            </h2>

            <p className="mt-1 text-gray-400">
              Computer Science Engineering
            </p>

          </div>

          {/* Information */}

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
              <Mail className="text-violet-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p>srushti@reva.edu.in</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
              <GraduationCap className="text-violet-400" />
              <div>
                <p className="text-sm text-gray-400">Department</p>
                <p>CSE</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
              <Building2 className="text-violet-400" />
              <div>
                <p className="text-sm text-gray-400">University</p>
                <p>REVA University</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
              <Calendar className="text-violet-400" />
              <div>
                <p className="text-sm text-gray-400">Current Year</p>
                <p>3rd Year</p>
              </div>
            </div>

          </div>

          {/* Activity */}

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
              <Users className="mx-auto text-violet-400" size={28} />
              <p className="mt-3 text-gray-400">Joined Communities</p>
              <h3 className="mt-2 text-3xl font-bold">2</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
              <Calendar className="mx-auto text-violet-400" size={28} />
              <p className="mt-3 text-gray-400">Registered Events</p>
              <h3 className="mt-2 text-3xl font-bold">3</h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
              <BookOpen className="mx-auto text-violet-400" size={28} />
              <p className="mt-3 text-gray-400">Saved Resources</p>
              <h3 className="mt-2 text-3xl font-bold">48</h3>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}