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

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent;
  background-size: 100% 250px, 100%;
  background-repeat: no-repeat;
  background-position: top;
  padding: 0px 20px;
`;

/* to bottom: Começa o efeito de cima para baixo
  #414141 com 0% = cor inicial 414141
  Ele vai até #181818 até chegar 100%
  resto transparent
  background-size: 100% 250px ---> Primeira instrução:
  background: linear-gradient(to bottom, #414141 0%

*/
