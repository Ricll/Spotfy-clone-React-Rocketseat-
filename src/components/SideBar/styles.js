import styled from 'styled-components';
import { Spinner } from '../Loading/styles';

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    padding: 25px; /* vai afetar a primeira div */
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;

  &:first-child {
    /* vai afetar a primeira li */
    margin: 0;
  }

  li {
    a {
      color: inherit; /* vai pegar a cor do Container #b3b3b3*/
      text-decoration: none;
      font-size: 16px;
      line-height: 32px;
      font-weight: ${props => (props.main ? 'bold' : 'normal')};

      &:hover {
        color: #fff;
      }
    }
    span {
      font-size: 14px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }
    ${Spinner} {
      height: 15px;
      margin-left: 5px;
    }
  }
`;

export const NewPlayList = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  font-size: 14px;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  padding: 15px 25px;

  &:hover {
    color: #fff;
  }

  img {
    margin-right: 10px;
  }
`;
