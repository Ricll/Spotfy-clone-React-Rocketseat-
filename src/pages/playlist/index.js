import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';
import {
  Container, Header, SongList, SongItem,
} from './styles';
import Loading from '../../components/Loading';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';


class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playListDetails: PropTypes.shape({
      data: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.title,
          author: PropTypes.string,
          album: PropTypes.string,
        })),
      }),
      loading: PropTypes.bool,
    }).isRequired,
    playlistDetails: PropTypes.func.isRequired,
    loadSong: PropTypes.func.isRequired,
    currentSong: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }

  state = {
    selectedSong: null,
  }

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (prevProps.match.params.id !== match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const { match } = this.props;
    const { id } = match.params;
    const { getPlaylistDetailsRequest } = this.props;
    getPlaylistDetailsRequest(id);
  }

  renderDetails = () => {
    const { playlistDetails } = this.props;
    const { loadSong } = this.props;
    const { selectedSong } = this.state;
    const { currentSong } = this.props;

    const playlist = playlistDetails.data;
    return (
      <Container>
        <Header>
          <img
            src={playlist.thumbnail}
            alt={playlist.title}
          />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{playlist.songs.length} Músicas</p>}
            <button type="button">PLAY</button>
          </div>
        </Header>
        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>Título</tr>
            <tr>Artista</tr>
            <tr>Álbum</tr>
            <tr>
              <img src={ClockIcon} alt="Duração" />
            </tr>
          </thead>
          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <SongItem
                  key={song.id}
                  onClick={() => this.setState({ selectedSong: song.id })}
                  onDoubleClick={() => loadSong(song, playlist.songs)}
                  selected={selectedSong === song.id}
                  playing={currentSong && currentSong.id === song.id}
                >
                  <td>
                    <img src={PlusIcon} alt="Adicionar" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:26</td>
                </SongItem>
              ))
            )}

          </tbody>
        </SongList>
      </Container>
    );
  }


  render() {
    const { playlistDetails } = this.props;
    return playlistDetails.loading ? <Container loading><Loading /></Container>
      : this.renderDetails();
  }
}


const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
  currentSong: state.player.currentSong,

});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...PlaylistDetailsActions,
  ...PlayerActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
