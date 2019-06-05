import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';
import { Container, NewPlayList, Nav } from './styles';
import AddPLayListIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {
  componentDidMount() {
    const { getPlaylistsRequest } = this.props;
    getPlaylistsRequest();
  }

  render() {
    const { playlists } = this.props;
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <a href="">Navegar</a>
            </li>
            <li>
              <a href="">Rádio</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>Sua Biblioteca</span>
            </li>
            <li>
              <a href="">Seu Daily Mix</a>
            </li>
            <li>
              <a href="">Tocados recentemente</a>
            </li>
            <li>
              <a href="">Músicas</a>
            </li>
            <li>
              <a href="">Albuns</a>
            </li>
            <li>
              <a href="">Artistas</a>
            </li>
            <li>
              <a href="">Arquivos Locais</a>
            </li>
            <li>
              <a href="">Vídeos</a>
            </li>
            <li>
              <a href="">Podcasts</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>PLAYLISTS</span>
            </li>
            {playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}

          </Nav>
        </div>
        <NewPlayList>
          <img src={AddPLayListIcon} alt="Adicionar Playlist" />
      Nova playlist
        </NewPlayList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,

});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
