import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      alert("Registration Successful!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-6">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-violet-600/20 blur-[180px]"></div>

      <div className="pointer-events-none absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-blue-600/15 blur-[180px]"></div>

      {/* Glass Card */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 glass w-full max-w-md rounded-3xl p-10"
      >
        <h1 className="mb-2 text-center text-5xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Register
        </h1>

        <p className="mb-8 text-center text-gray-400">
          Create your SecureAuth account
        </p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="mb-5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-violet-500 focus:shadow-[0_0_20px_rgba(139,92,246,.5)]"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="mb-5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-violet-500 focus:shadow-[0_0_20px_rgba(139,92,246,.5)]"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="mb-6 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-violet-500 focus:shadow-[0_0_20px_rgba(139,92,246,.5)]"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(139,92,246,.8)]"
        >
          Create Account
        </button>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-violet-400 hover:text-violet-300"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;