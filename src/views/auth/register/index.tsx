import Link from "next/link";
// import styles from "./register.module.css";

const TampilanRegister = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-green-400">
      
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center gap-3">
        <h1 className="text-2xl font-bold">Halaman Register</h1>

        <input
          type="text"
          placeholder="Username"
          className="border px-3 py-2 rounded w-64"
        />

        <input
          type="email"
          placeholder="Email"
          className="border px-3 py-2 rounded w-64"
        />

        <input
          type="password"
          placeholder="Password"
          className="border px-3 py-2 rounded w-64"
        />

        <button className="border px-3 py-1 rounded">
          Register
        </button>

        <Link href="/auth/login" className="text-blue-600">
          Ke Halaman Login
        </Link>
      </div>

    </div>
  );
};

export default TampilanRegister;