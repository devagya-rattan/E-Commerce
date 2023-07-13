import "./Products.scss";
import Product from "./Product/Product";
const Products = ({ innerpage, products,headingtext }) => {
  return (
    <>
      <div className="products-container">
        {!innerpage && <div className="sec-heading">{headingtext}</div>}
        <div className="products">
        {products?.data?.map((item) => (
                    <Product
                        key={item.id}
                        id={item.id}
                        data={item.attributes}
                    />
                ))}
          
        </div>
      </div>
    </>
  );
};

export default Products;
