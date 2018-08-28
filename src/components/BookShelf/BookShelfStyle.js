import styled from 'styled-components';
import addImg from '../../assets/icons/add.svg';

export const ListBooksTitle = styled.div`
  padding: 10px 0;
  background: #2e7c31;
  text-align: center;

  h1 {
    font-weight: 400;
    margin: 0;
    color: white;
  }
`;

export const ListBooksContent = styled.div`
  padding: 0 0 80px;
  flex: 1;
`;

export const Bookshelf = styled.div`
  padding: 0 10px 20px;
  @media (min-width: 600px) {
    padding: 0 20px 40px;
  }
`;

export const BookshelfTitle = styled.h2`
  border-bottom: 1px solid #dedede;
`;

export const BookshelfBooks = styled.div`
  text-align: center;
`;

export const BookGrid = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  li {
    padding: 10px 15px;
    text-align: left;
  }
`;

export const OpenSearch = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;

  a {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #2e7d32;
    background-image: url(${addImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 28px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    font-size: 0;
  }
`;
