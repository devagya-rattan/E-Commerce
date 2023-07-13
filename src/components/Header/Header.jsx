import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import "./Header.scss";
const Header = () => {
    const [scrolled,setscrolled] = useState(false)
    const [showcart,setshowcart] = useState(false)
    const [search,setsearch] = useState(false)
    const handlescroll =() =>{
        const offset = window.scrollY
        if(offset>200){
            setscrolled(true)
        }else{
            setscrolled(false)
        }
    }

    useEffect(()=>{
            window.addEventListener("scroll",handlescroll)
    },[])
  return (
    <>
      <header className={`main-header ${scrolled?'stickyheader':''}` }>
        <div className="header-content">
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center">JSDEVSTORE.</div>
          <div className="right">
            <TbSearch onClick={()=>{setsearch(true)} }/>
            <AiOutlineHeart />
            <span className="cart-icon" onClick={()=>{setshowcart(true)}           }>
              <CgShoppingCart />
              <span>5</span>
            </span>
          </div>
        </div>
      </header>
      {showcart&& <Cart setshowcart= {setshowcart}/>}
      {search && <Search setsearch= {setsearch}/>}
    </>
  );
};

export default Header;
