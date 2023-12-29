import { useOutletContext } from "react-router-dom";

export default function MainPage() {
  const { productData, loadingData, error } = useOutletContext();

  return (
    <>
      <h1>This is the main page area, where youll be having some products</h1>

      {/*  {productData && (
        <ul>
          {productData.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      )} */}
    </>
  );
}
