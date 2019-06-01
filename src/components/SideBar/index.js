import React, { forwardRef } from 'react';
import { Container, NewPlayList, Nav } from './styles';
import AddPLayListIcon from '../../assets/images/add_playlist.svg';

const Sidebar = forwardRef((props, ref) => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a ref={ref}>Navegar</a>
        </li>
        <li>
          <a ref={ref}>Rádio</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>Sua Biblioteca</span>
        </li>
        <li>
          <a ref={ref}>Seu Daily Mix</a>
        </li>
        <li>
          <a ref={ref}>Tocados recentemente</a>
        </li>
        <li>
          <a ref={ref}>Músicas</a>
        </li>
        <li>
          <a ref={ref}>Albuns</a>
        </li>
        <li>
          <a ref={ref}>Artistas</a>
        </li>
        <li>
          <a ref={ref}>Arquivos Locais</a>
        </li>
        <li>
          <a ref={ref}>Vídeos</a>
        </li>
        <li>
          <a ref={ref}>Podcasts</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>PLAYLISTIS</span>
        </li>
        <li>
          <a ref={ref}>Navegar</a>
        </li>
        <li>
          <a ref={ref}>Rádio</a>
        </li>
      </Nav>
    </div>
    <NewPlayList>
      <img src={AddPLayListIcon} alt="Adicionar Playlist" />
      Nova playlist
    </NewPlayList>
  </Container>
));

export default Sidebar;
