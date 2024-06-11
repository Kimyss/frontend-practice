import yoImg from "../images/yonex.jpg";

import { Col, Container, Row } from "react-bootstrap";
import { styled } from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../features/product/productSlice";




const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yoImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

function Main() {

  const dispatch = useDispatch();

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
        <Container>
          <Row>

          </Row>
        </Container>
      </section>
    </>
  );
};

export default Main;
