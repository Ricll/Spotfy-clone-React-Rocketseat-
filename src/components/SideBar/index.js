import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';
import { Container, NewPlayList, Nav } from './styles';
import AddPLayListIcon from '../../assets/images/add_playlist.svg';
import Loading from '../Loading';

class Sidebar extends Component {
static propTypes = {
  getPlaylistsRequest: PropTypes.func.isRequired,
  playlists: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })),
    loading: PropTypes.bool,
  }).isRequired,
}


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
            <Link to="/">Navegar</Link>
          </li>
          <li>
            <a href="http://localhost:3000/">Rádio</a>
          </li>
        </Nav>
        <Nav>
          <li>
            <span>Sua Biblioteca</span>
          </li>
          <li>
            <a href="http://localhost:3000/">Seu Daily Mix</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Tocados recentemente</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Músicas</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Albuns</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Artistas</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Arquivos Locais</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Vídeos</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Podcasts</a>
          </li>
        </Nav>
        <Nav>
          <li>
            <span>PLAYLISTS</span>
            {playlists.loading && <Loading />}
          </li>
          {playlists.data.map(playlist => (
            <li key={playlist.id}>
              <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
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
