import yoImg from "../images/yonex.jpg";


import { styled } from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, selectProductList } from "../features/product/productSlice";
import ProductItem from "../components/ProductItem";
import { Container, Row } from "react-bootstrap";




const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yoImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

function Main() {

  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);



  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/kimyss/db-shop/products")
      .then((response) => {
        dispatch(getAllProducts(response.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <section>
        <MainBackground />
      </section>

      <section>
        <Container>
          <Row>
            {productList.map((product) => {
              return <ProductItem key={product.id} product={product} />
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Main;
