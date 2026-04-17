import Link from "next/link";
import style from "../../../auth/register/register.module.scss";

const TampilanRegister = () => {
  return (
    <div className={style.register}>
      <h1 className={style.register__title}>Halaman Register</h1>

      <form className={style.register__form}>
        {/* email */}
        <div className={style.register__form__item}>
          <label
            htmlFor="email"
            className={style.register__form__item__label}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className={style.register__form__item__input}
          />
        </div>
        {/* fullname */}
        <div className={style.register__form__item}>
          <label
            htmlFor="Fullname"
            className={style.register__form__item__label}
          >
            Fullname
          </label>
          <input
            type="text"
            id="Fullname"
            name="Fullname"
            placeholder="Fullname"
            className={style.register__form__item__input}
          />
        </div>
        {/* password */}
        <div className={style.register__form__item}>
          <label
            htmlFor="Password"
            className={style.register__form__item__label}
          >
            Password
          </label>
          <input
            type="password"
            id="Password"
            name="Password"
            placeholder="Password"
            className={style.register__form__item__input}
          />
        </div>

      </form>

      <Link href="/auth/login">Ke Halaman Login</Link>
    </div>
  );
};

export default TampilanRegister;