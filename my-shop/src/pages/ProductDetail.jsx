import { clearSelectedProduct, getSeletedProduct, selectproductItem } from "../features/product/productSlice";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductDetail() {

  const dispatch = useDispatch();
  const product = useSelector(selectproductItem);
  const { productId } = useParams();

  const forrmatter = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' });


  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/kimyss/db-shop/products/${productId}`)
        console.log(response.data);
        dispatch(getSeletedProduct(response.data));
      } catch (error) {
        console.error(error);
      }
    }
    fetchProductById();
    return () => {
      dispatch(clearSelectedProduct());
    }
  }, []);

  return (
    <>
      <Container className="pt-5">
        <Row>
          <Col md={6}>
            <img src={product?.imagePath} alt="" />
          </Col>
          <Col md={6}>
            <h4>{product?.title}</h4>
            <p>{product?.content}</p>
            <p>{forrmatter.format(product?.price)}원</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;