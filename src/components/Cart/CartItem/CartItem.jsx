import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import { Context } from "../../../utils/context";
// import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useContext } from "react";
const CartItem = () => {
  const { cartitems, handleremovecart, handlecartquantity } =
    useContext(Context);
  return (
    <>
      {cartitems.map((item) => (
        <div className="cart-products">
          <div key={item.id} className="cart-product">
            <div className="img-container">
              <img
                src={
                  process.env.REACT_APP_DEV_URL +
                  item.attributes.img.data[0].attributes.url
                }
                alt=""
              />
            </div>
            <div className="prod-details">
              <span className="name">{item.attributes.title}</span>
              <MdClose
                className="clodse-btn"
                onClick={() => handleremovecart(item)}
              />
              <div className="quantity-buttons">
                <span onClick={() => handlecartquantity("dec", item)}>-</span>
                <span>{item.attributes.quantity}</span>
                <span onClick={() => handlecartquantity("inc", item)}>+</span>
              </div>
              <div className="text"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
