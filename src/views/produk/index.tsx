import HeroSection from "./hero.section";
import MainSection from "./main.section";
import styles from "./produk.module.css";

const TampilanProduk = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <HeroSection />
      </div>

      <div className={styles.main}>
        <MainSection />
      </div>
    </div>
  );
};

export default TampilanProduk;