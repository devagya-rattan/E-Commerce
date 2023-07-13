import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect, useContext } from "react";
import { fetchdata } from "../../utils/api";
import { Context } from "../../utils/context";
const Home = () => {
  const { categories, setcategories, products, setproducts } =
    useContext(Context);
  useEffect(() => {
    getcategories();
    getproducts();
  });
  const getproducts = () => {
    fetchdata("/api/products?populate=*").then((res) => {
      console.log(res);
      setproducts(res);
    });
  };
  const getcategories = () => {
    fetchdata("/api/categories?populate=*").then((res) => {
      console.log(res);
      setcategories(res);
    });
  };
  return (
    <>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} />
        </div>
      </div>
    </>
  );
};

export default Home;
