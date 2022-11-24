import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  // get Products
  const productsData = await fetch(
    "https://ema-john-simple-server-for-md-b.vercel.app/products"
  );
  const { products } = await productsData.json();

  // get cart
  const savedCart = getStoredCart();
  const initialCart = [];

  for (const id in savedCart) {
    const addedProduct = products.find((product) => product._id === id);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }

  return { products: products, initialCart: initialCart };
};
