import { Col } from "react-bootstrap";

function ProductItem() {
  return (
    <>
      <Col md={4}>
        <img src="https://www.yonexmall.com/shop/data/goods/1667190100104s0.png" width="80%" />
        <h4>상품명</h4>
        <p>상품가격</p>
      </Col>
    </>
  );
};

export default ProductItem;