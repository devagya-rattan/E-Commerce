import { createContext,useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setcategories] = useState();
  const [products, setproducts] = useState();
  const [cartitems,setcartitems] = useState([]) 
  const [cartcount,setcartcount] = useState(0)
  const [cartsubtotal,setcartsubtotal] = useState(0)
  const location = useLocation();
  
  useEffect(() => {
   let subtotal = 0;
   cartitems.map(item =>subtotal += item.attributes.price*item.attributes.quantity)
   setcartsubtotal(subtotal);
  }, [cartitems]);
  const handleaddtocart = (product,quantity)=>{
    let items = [...cartitems]
    let index = items.findIndex(p=>p.id===product.id)
    if(index!==-1){
      items[index].attributes.quantity+=quantity
    }else{
      product.attributes.quantiity = quantity
      items = [...items,product]
      setcartitems(items)
    }
  }
  const handleremovecart = (product)=>{
    let items = [...cartitems];
    items = items?.filter((p) => p.id !== product?.id);
    setcartitems(items);
  }
  const handlecartquantity = (type,product)=>{
    let items = [...cartitems];
    let index = items?.findIndex((p) => p.id === product?.id);
    if (type === "inc") {
        items[index].attributes.quantity += 1;
    } else if (type === "dec") {
        if (items[index].attributes.quantity === 1) return;
        items[index].attributes.quantity -= 1;
    }
    setcartitems(items);
  }
  return (
    <Context.Provider
      value={{
        categories,
        setcategories,
        products,
        setproducts,
        cartitems,setcartitems,cartcount,setcartcount,cartsubtotal,setcartsubtotal,handleaddtocart,handlecartquantity,handleremovecart
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
