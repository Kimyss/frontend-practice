import yoImg from "../images/yonex.jpg";


import { styled } from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, selectproductList } from "../features/product/productSlice";
import ProductItem from "../components/ProductItem";




const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yoImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

function Main() {

  const dispatch = useDispatch();

  const productList = useSelector(selectproductList);

  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/kimyss/db-shop/products")
      .then((response) => {
        dispatch(getAllProducts(response.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); //의존성? 마운트? 한번만?

  return (
    <>
      <section>
        <MainBackground />
      </section>


      <section>
        {productList.map((product)=>{
          return <ProductItem  key={product.id} id={product.id} name={product.name} price={product.price} />
        })}
      </section>
    </>
  );
};

export default Main;
