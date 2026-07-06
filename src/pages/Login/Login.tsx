import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if(!email || !password){
        alert("Please fill all fields.");
        return;
    }
    navigate("/dashboard");
  
    console.log({
      email,
      password,
    });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl font-bold">WELCOME BACK</h1>

        <p className="mt-2 text-gray-400">
          Login to continue to UniVerse.
        </p>

        <form
          className="mt-8 space-y-5"
          onSubmit={handleLogin}
        >
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

          <div className="flex justify-end">
            <button
              type="button"
              className="text-xs text-violet-400 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 py-3 font-semibold transition hover:bg-violet-700"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-violet-400 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}