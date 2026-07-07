import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Database, Cpu } from "lucide-react";

function Home() {
  return (
    <div className="relative bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[180px]"></div>

      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[180px]"></div>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
        >
          SecureAuth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-3xl text-center text-xl text-gray-300"
        >
          Enterprise-grade MERN Authentication System with JWT,
          MongoDB, Password Encryption and Protected Routes.
        </motion.p>

        <div className="mt-10 flex gap-6">

          <Link
            to="/login"
            className="rounded-xl bg-violet-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-violet-700"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl border border-violet-500 px-8 py-4 font-semibold transition hover:bg-violet-600/20 hover:scale-105"
          >
            Register
          </Link>

        </div>

      </section>

      {/* Features */}

      <section className="relative z-10 px-10 py-24">

        <h2 className="mb-16 text-center text-5xl font-bold">
          Why SecureAuth?
        </h2>

        <div className="grid gap-8 md:grid-cols-4">

          <Feature
            icon={<ShieldCheck size={40} />}
            title="JWT Security"
            text="Secure authentication using JSON Web Tokens."
          />

          <Feature
            icon={<Lock size={40} />}
            title="Password Hashing"
            text="Passwords are encrypted using bcrypt."
          />

          <Feature
            icon={<Database size={40} />}
            title="MongoDB Atlas"
            text="Cloud-hosted database for secure storage."
          />

          <Feature
            icon={<Cpu size={40} />}
            title="REST API"
            text="Fast Express backend with protected routes."
          />

        </div>

      </section>

    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,.35)]"
    >
      <div className="mb-6 text-violet-400">
        {icon}
      </div>

      <h3 className="mb-3 text-2xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-400">
        {text}
      </p>
    </motion.div>
  );
}

export default Home;