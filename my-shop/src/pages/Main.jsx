import { Col, Container, Row } from "react-bootstrap";
import yoImg from "../images/yonex.jpg";
import { styled } from "styled-components";
const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yoImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

function Main() {
  return (
    <>
      <section>
        <MainBackground />
      </section>

      <Container>
        <Row>
          {/* 부트스트랩을 이용한 반응형 작업*/}
          {/* md >= 768px 이상에서 전체 12등분 중 4:4:4로 보여줌 */}
          <Col>
            <img src="https://www.yonexmall.com/shop/data/goods/1645767865278s0.png" width="80%" />
            <h4>상품명</h4>
            <p>상품가격</p>
          </Col>
          <Col md={4}>
            <img src="https://www.yonexmall.com/shop/data/goods/1659329583483s0.png" width="80%" />
            <h4>상품명</h4>
            <p>상품가격</p>
          </Col>
          <Col md={4}>
            <img src="https://www.yonexmall.com/shop/data/goods/1667190100104s0.png" width="80%" />
            <h4>상품명</h4>
            <p>상품가격</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
