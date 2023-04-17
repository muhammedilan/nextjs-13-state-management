import React from "react";
import Product from "@/components/Product";

import { store } from "@/stores";
import { getProducts } from "@/stores/slices/productsSlice";

const Home = async () => {
  await store.dispatch(getProducts());
  const { products, error } = store.getState().products;

  return (
    <div className="mt-10">
      {error ? (
        "Error..."
      ) : (
        <>
          <h1 className="text-center mb-10">Products</h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-10 gap-y-20">
            {products.map((product) => (
              <Product {...product} key={product.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
