import styled from 'styled-components';
import SearchIcon from '../../assets/images/search.svg';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0; /*  topo 10px, lateral20px, botton0 */
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  height: 26px;
  width: 210px;
  padding: 6px 7px 6px 26px; /*  7:35 minutos  minutos topo 6px, direita, baixo, esquerda  */
  background: #fff url(${SearchIcon}) no-repeat 7px center;

  input {
    flex: 1;
    font-size: 14px;
    color: #121212;
    border: 0;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;

  img {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;
