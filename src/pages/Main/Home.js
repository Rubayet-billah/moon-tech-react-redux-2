import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { filterBrand, filterStock } from "../../redux/actions/filterActions";
import loadProductData from "../../redux/thunk/product/fetchProducts";

const Home = () => {
  const { filters, keyword } = useSelector((state) => state.filter);
  const products = useSelector((state) => state.product.products);

  const { brand, stock } = filters;

  const dispatch = useDispatch((state) => state);

  useEffect(() => {
    dispatch(loadProductData());
  }, [dispatch]);

  const activeClass = "text-white bg-indigo-500 border-white";

  let content;

  if (products.length) {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }

  if (products.length && (stock || brand.length || keyword)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        } else {
          return product;
        }
      })
      .filter((product) => {
        if (keyword) {
          console.log(product.model.toLowerCase());
          return product.model.toLowerCase().includes(keyword);
        } else {
          return product;
        }
      })
      .filter((product) => {
        if (brand.length) {
          return brand.includes(product.brand);
        } else {
          return product;
        }
      })
      .map((product) => <ProductCard key={product.model} product={product} />);

    console.log(content);
  }
  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          onClick={() => dispatch(filterStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${
            stock && activeClass
          } `}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(filterBrand("amd"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brand.includes("amd") && activeClass
          }`}
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(filterBrand("intel"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brand.includes("intel") && activeClass
          }`}
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
};

export default Home;
