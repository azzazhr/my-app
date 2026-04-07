import { ProductType } from "../../types/Product.type";
import TampilanProduk from "../../views/produk";

const halamanProdukServer = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default halamanProdukServer;

// fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses,
// dan akan mengambil data produk dari API sebelum merender halaman
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/produk");
  const response = await res.json();

  console.log("Data produk yang diambil dari API:", response);

  return {
    props: {
      products: response.data, // Pastikan untuk memberikan nilai default jika data tidak tersedia
    },
  };
}