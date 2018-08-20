import styled from 'styled-components';

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
