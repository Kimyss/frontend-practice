import { Col } from "react-bootstrap";

function ProductItem(props) {
  const { product: { id, title, price, imagePath } } = props;

  const formatter = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' })

  return (
    <>
      <Col md={4} sm={6} >
        <img src={imagePath} width="80%" />
        <h4>{title}</h4>
        <p>{formatter.format(price)}원</p>
      </Col>
    </>
  );
};

export default ProductItem;