import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps, match } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';
// import Rating from "../components/Rating";

// const ProductsProps = {
//   id: number,
//   first_name: string,
//   last_name: string,
//   avatar: string,
// };

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  //  const category = props.match.params.id ? props.match.params.id : "";
  const productList = useSelector((state) => state?.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());

    return () => {
      //
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    // dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  return (
    <>
      {<h2>Status</h2>}
      <ul className="filter">
        <li>
          <form onSubmit={submitHandler}>
            <input name="searchKeyword" onChange={(e) => setSearchKeyword(e.target.value)} />
            <button type="submit">Search</button>
          </form>
        </li>
        <li>
          Sort By
          <select name="sortOrder" onChange={sortHandler}>
            <option value="">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </li>
      </ul>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul className="products">
          {products?.map((products, idx) => (
            <li key={idx}>
              <div className="status">
                <figure>
                  <img src={products.avatar} alt="avatar" />
                </figure>
                <h1>
                  {products.first_name} {products.last_name}
                </h1>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default HomeScreen;
