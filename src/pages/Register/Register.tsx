import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    navigate("/dashboard")
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl font-bold">Create Account 🚀</h1>

        <p className="mt-2 text-gray-400">
          Join the UniVerse community today.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-transparent p-3 outline-none focus:border-violet-500"
          />

          <input
            type="email"
            placeholder="name@college.edu.in"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-transparent p-3 outline-none focus:border-violet-500"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-transparent p-3 outline-none focus:border-violet-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-transparent p-3 outline-none focus:border-violet-500"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 py-3 font-semibold transition hover:bg-violet-700"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-violet-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}