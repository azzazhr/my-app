import Link from "next/link";
import style from "../../auth/login/login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const TampilanLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();
  const callbackUrl: any = query.callbackUrl || "/";
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError(res.error || "Login failed");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Wrong email or password");
    }
  };

  return (
    <div className={style.login}>
      {error && <p className={style.login__error}>{error}</p>}
      <h1 className={style.login__title}>Halaman Login</h1>

      <form onSubmit={handleSubmit} className={style.login__form}>
        <div className={style.login__form__item}>
          <label htmlFor="email" className={style.login__form__item__label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className={style.login__form__item__input}
          />
        </div>

        <div className={style.login__form__item}>
          <label htmlFor="password" className={style.login__form__item__label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className={style.login__form__item__input}
          />
        </div>

        <button
          type="submit"
          className={style.login__form__item__button}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>

        <br />

        <p className={style.login__form__item__text}>
          Tidak punya akun?{" "}
          <Link href="/auth/register">Ke Halaman Register</Link>
        </p>
      </form>
    </div>
  );
};

export default TampilanLogin;