import React from 'react';
import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://townsquare.media/site/366/files/2014/10/Foo-Fighters2.jpg?w=980&q=75"
          alt="Playlist"
        />
        <strong>Rock and Roll</strong>
        <p>Relaxa enquanto você programa</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://townsquare.media/site/366/files/2014/10/Foo-Fighters2.jpg?w=980&q=75"
          alt="Playlist"
        />
        <strong>Rock and Roll</strong>
        <p>Relaxa enquanto você programa</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://townsquare.media/site/366/files/2014/10/Foo-Fighters2.jpg?w=980&q=75"
          alt="Playlist"
        />
        <strong>Rock and Roll</strong>
        <p>Relaxa enquanto você programa</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://townsquare.media/site/366/files/2014/10/Foo-Fighters2.jpg?w=980&q=75"
          alt="Playlist"
        />
        <strong>Rock and Roll</strong>
        <p>Relaxa enquanto você programa</p>
      </Playlist>
    </List>

  </Container>
);

export default Browse;
