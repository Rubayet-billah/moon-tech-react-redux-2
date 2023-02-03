import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { filterBrand, filterStock } from "../../redux/actions/filterActions";

const Home = () => {
  const [products, setProducts] = useState([]);

  const filters = useSelector((state) => state.filter.filters);
  console.log(filters);

  const { brand, stock } = filters;

  const dispatch = useDispatch((state) => state);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  const activeClass = "text-white  bg-indigo-500 border-white";

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
        {products.map((product) => (
          <ProductCard key={product.model} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
