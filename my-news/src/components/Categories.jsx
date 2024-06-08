import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Categories() {

  const categories = [
    {
      name: 'all',
      text: '전체보기'
    },
    {
      name: 'business',
      text: '비즈니스'
    },
    {
      name: 'entertainment',
      text: '엔터테인먼트'
    },
    {
      name: 'health',
      text: '건강'
    },
    {
      name: 'science',
      text: '과학'
    },
    {
      name: 'sports',
      text: '스포츠'
    },
    {
      name: 'technology',
      text: '기술'
    }
  ];

  const CategoryBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
  `

  const Category = styled(NavLink)`
    font-size: 1.125rem;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    cursor: pointer;

    &:hover {
      color: #495057;
    }

    & + & {
      margin-left: 1rem;
    }
  `
  return (
    <CategoryBlock>
      {categories.map((cate)=>{
        return <Category
        key={cate.name}
        to ={cate.name ==='all'? '/' : `/${cate.name}`}
        >
          {cate.text}
        </Category>
      })}
    </CategoryBlock>
  );
};

export default Categories;