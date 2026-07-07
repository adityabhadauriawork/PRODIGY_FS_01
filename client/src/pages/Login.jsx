import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
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
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-6">

      <div className="absolute w-96 h-96 bg-violet-600/20 blur-[130px] rounded-full -top-24 -left-24 animate-pulse"></div>

      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full bottom-[-120px] right-[-100px] animate-pulse"></div>

      <form
        onSubmit={handleSubmit}
        className="glass w-[420px] rounded-3xl p-10"
      >
        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
          SecureAuth
        </h1>

        <p className="text-center text-gray-400 mb-10">
          Enterprise Authentication Platform
        </p>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-violet-500 focus:shadow-[0_0_20px_rgba(139,92,246,.5)]"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full mb-5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-violet-500 focus:shadow-[0_0_20px_rgba(139,92,246,.5)]"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(139,92,246,.8)] active:scale-95"
        >
          Login
        </button>

        <p className="mt-8 text-center text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-violet-400 hover:text-violet-300 font-semibold"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;