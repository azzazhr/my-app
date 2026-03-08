import Link from "next/link";
// import styles from "./register.module.css";

const TampilanRegister = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-3 bg-green-400">
      <h1 className="text-3xl font-bold">Halaman Register</h1>

      <input
        type="text"
        placeholder="Username"
        className="border px-3 py-2 rounded"
      />

      <input
        type="email"
        placeholder="Email"
        className="border px-3 py-2 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        className="border px-3 py-2 rounded"
      />

      <button className="border px-3 py-1 rounded">Register</button>

      <Link href="/auth/login" className="text-blue-500 hover:underline">
        Ke Halaman Login 
      </Link>
    </div>
  );
};

export default TampilanRegister;