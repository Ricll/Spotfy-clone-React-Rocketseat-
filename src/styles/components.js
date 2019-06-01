import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`; /* O <wrapper> vai conter dois components dentro:
o <container> da sidebar que e a sidebar + o conteudo (Bandas) */

export const Container = styled.div`
  flex: 1;
  display: flex;
`;
