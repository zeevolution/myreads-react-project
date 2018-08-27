import styled from 'styled-components';
import selectImg from '../../assets/icons/arrow-drop-down.svg';

export const TheBook = styled.div`
  width: 140px;
`;

export const BookTitle = styled.div`
  margin-top: 10px;
`;

export const BookAuthors = styled.div`
  font-size: 0.8em;
  color: #999;
`;

export const BookTop = styled.div`
  position: relative;
  height: 200px;
  display: flex;
  align-items: flex-end;
`;

export const BookShelfChanger = styled.div`
  position: absolute;
  right: 0;
  bottom: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #60ac5d;
  background-image: url(${selectImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  select {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

export const BookCover = styled.div.attrs({
  width: props => props.width,
  height: props => props.height,
  url: props => props.url,
})`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #eee;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-image: url(${props => props.url});
`;

export const BookCoverTitle = styled.div`
  padding: 20px 10px 0;
  text-align: center;
  font-size: 0.8em;
`;
