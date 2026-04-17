import Link from "next/link";
import style from "../../../auth/register/register.module.scss";

const TampilanRegister = () => {
  return (
    <div className={style.register}>
      <h1 className={style.register__title}>Halaman Register</h1>

      <form className={style.register__form}>
        
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

      </form>

      <Link href="/auth/login">Ke Halaman Login</Link>
    </div>
  );
};

export default TampilanRegister;