import styles from '@/styles/404.module.scss';
import Head from 'next/head';

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
      </Head>
      
      <img src="/page-not-found.png" alt="404" className={styles.error__image} />
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
    </div>
  );
};

export default Custom404;