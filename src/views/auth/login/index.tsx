import Link from "next/link";
import style from "../../auth/login/login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const Tampilanlogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setError("");
    setIsLoading(true);
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const fullname = formData.get("Fullname") as string;
    const password = formData.get("Password") as string;

    // validasi email wajib diisi dan password minimal 6 karakter
    if (!email) {
      setIsLoading(false);
      setError("Email wajib diisi");
      return;
    }

    if (password.length < 6) {
      setIsLoading(false);
      setError("Password minimal 6 karakter");
      return;
    }
    
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, fullname, password }),
    });
    // const result = await response.json();
    // console.log(result);
    if (response.status === 200) {
      form.reset();
      // event.currentTarget.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(
        response.status === 400 ? "Email already exists" : "An error occurred",
      );
    }
  };

  return (
    <div className={style.login}>
        {error && <p className={style.login__error}>{error}</p>}
      <h1 className={style.login__title}>Halaman login</h1>

      <form onSubmit={handleSubmit} className={style.login__form}>
        {/* email */}
        <div className={style.login__form__item}>
          <label
            htmlFor="email"
            className={style.login__form__item__label}
          >
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
        {/* fullname */}
        <div className={style.login__form__item}>
          <label
            htmlFor="Fullname"
            className={style.login__form__item__label}
          >
            Fullname
          </label>
          <input
            type="text"
            id="Fullname"
            name="Fullname"
            placeholder="Fullname"
            className={style.login__form__item__input}
          />
        </div>
        {/* password */}
        <div className={style.login__form__item}>
          <label
            htmlFor="Password"
            className={style.login__form__item__label}
          >
            Password
          </label>
          <input
            type="password"
            id="Password"
            name="Password"
            placeholder="Password"
            className={style.login__form__item__input}
          />
        </div>
        
          {/*button login*/}
          <button
            type="submit"
            className={style.login__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>

          <br />
            <p className={style.login__form__item__text}>
          Tidak punya {" ' "}akun? <Link href="/auth/register">Ke Halaman Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Tampilanlogin;