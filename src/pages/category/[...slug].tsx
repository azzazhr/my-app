import { useRouter } from "next/router";

const halamanCategory = () => {
  const { query } = useRouter();
  const slug = query.slug;

  return (
    <div>
      <h1>Halaman Category</h1>

      <p>Kategori:</p>
      <ul>
        {Array.isArray(slug) &&
          slug.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
};

export default halamanCategory;