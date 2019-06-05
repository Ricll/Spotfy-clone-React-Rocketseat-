import React from 'react';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';


const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://townsquare.media/site/366/files/2014/10/Foo-Fighters2.jpg?w=980&q=75"
        alt="Playlist"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>RockFoverer</h1>
        <p>13 músicas</p>
        <button>PLAY</button>
      </div>
    </Header>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Paper Cut</td>
          <td>Linkin Park</td>
          <td>Hybryd Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Paper Cut</td>
          <td>Linkin Park</td>
          <td>Hybryd Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Paper Cut</td>
          <td>Linkin Park</td>
          <td>Hybryd Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Paper Cut</td>
          <td>Linkin Park</td>
          <td>Hybryd Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Paper Cut</td>
          <td>Linkin Park</td>
          <td>Hybryd Theory</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Paper Cut</td>
          <td>Linkin Park</td>
          <td>Hybryd Theory</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
