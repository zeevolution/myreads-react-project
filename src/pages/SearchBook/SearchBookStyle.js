import styled from 'styled-components';
import arrowBackImg from '../../assets/icons/arrow-back.svg';

export const SearchBookBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 0 6px rgba(0, 0, 0, 0.23);

  input {
    width: 1000px;
    padding: 15px 10px;
    font-size: 1.25em;
    border: none;
    outline: none;
  }
`;

export const SearchBooksInputWrapper = styled.div`
  flex: 1;
  background: #fff;
`;

export const CloseSearch = styled.div`
  a {
    display: block;
    top: 20px;
    left: 15px;
    width: 50px;
    height: 53px;
    background: white;
    background-image: url(${arrowBackImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 28px;
    font-size: 0;
  }
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

export const SearchBooksResults = styled.div`
  padding: 80px 10px 20px;
`;
