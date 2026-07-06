import { Link } from "react-router-dom";
import Logo from "../common/Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="flex items-center gap-6">
          <Link
            to="/community"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Communities
          </Link>

          <Link
            to="/login"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}