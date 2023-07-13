import "./Search.scss";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
const Search = ({ setsearch }) => {
  const [query, setquery] = useState("");
  const navigate = useNavigate();
  const onchange = (e) => {
    setquery(e.target.value);
  };
  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );
  if (!query.length) {
    data = null;
  }
  return (
    <>
      <div className="search-modal">
        <div className="form-field">
          <input
            type="text"
            autoFocus
            placeholder="Search"
            onChange={onchange}
            value={query}
          />
          <MdClose onClick={() => setsearch(false)} />
        </div>
        <div className="search-result-content">
          <div className="search-results">
            {data?.data?.map((item) => (
              <div key={item.id} className="search-result-item">
                <div className="image-container">
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
                  <span className="desc">{item.attributes.decs}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
