import { Col } from "react-bootstrap";

function ProductItem({ id, name, price }) {
  return (
    <>
      <Col md={4} key={id}>
        <img src="https://www.yonexmall.com/shop/data/goods/1667190100104s0.png" width="80%" />
        <h4>{name}</h4>
        <p>{price}</p>
      </Col>
    </>
  );
};

export default ProductItem;