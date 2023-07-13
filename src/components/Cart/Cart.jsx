import "./Cart.scss";
import { MdClose } from "react-icons/md";
// import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { Context } from "../../utils/context";
import { useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { makepaymentrequest } from "../../utils/api";
const Cart = ({ setshowcart }) => {
  const stripePromise = loadStripe(
    `pk_test_51NSixySI3j3qXOu7sO4QJ9ZeZkBCZ8BTApSHMmBRa6cNpnMpDwuK3sv4n5HeYK89BRVO68y1npr1AelDAoiAbsru0091Tqtxil`
  );
  const handlepayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makepaymentrequest.post("/api/orders", {
         Cartitem,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const { Cartitem, cartsubtotal } = useContext(Context);
  return (
    <>
      <div className="cart-panel">
        <div className="opacity-layer"></div>
        <div className="cart-content">
          <div className="cart-header">
            <span className="heading">Shopping Cart</span>
            <span
              className="close-btn"
              onClick={() => {
                setshowcart(false);
              }}
            >
              <MdClose />
              <span className="text">Close</span>
            </span>
          </div>
          {/* <div className="empty-cart">
            <BsCartX/>
            <span>No products in the cart</span>
            <button className="return-cta">Return to shop</button>
          </div> */}

          <>
            <CartItem />

            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal</span>
                <span className="text total">&#8377;{cartsubtotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handlepayment}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Cart;
