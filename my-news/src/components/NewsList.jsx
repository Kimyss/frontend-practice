import { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import NewsItems from "./NewsItems";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;


function NewsList() {

  // API를 요청하고 뉴스 데이터가 들어있는 배열을 
  // 리액트 엘리먼트 배열로 변환하여 렌더링하는 컴포넌트

  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchNewData = async () => {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=087116c618384ac38b3e508cdcc67386');
      console.log(response.data.articles);
      setArticle(response.data.articles);
    };
    fetchNewData();
  }, []);
  return (
    <NewsListBlock>
      {article && article.map((article) => {
        return <NewsItems key={article.url} article={article} />
      })}
    </NewsListBlock>
  );
};

export default NewsList;