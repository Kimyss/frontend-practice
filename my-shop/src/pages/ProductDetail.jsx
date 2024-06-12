import { useDispatch, useSelector } from "react-redux";
import { getSeletedProduct } from "../features/product/productSlice";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

function ProductDetail() {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/kimyss/db-shop/products/1`)
        console.log(response);
        dispatch(getSeletedProduct(response.data));
      } catch (error) {
        console.error(error);
      }
    }
    fetchProductById();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            디스패치생성 - 액시오스 - 디스패치(겟셀렉트())
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;