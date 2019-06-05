import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistsActions } from '../ducks/playlists';

export function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists');

    yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}

/* call --- >  usado para obter o resultado de promisses, de chamadas assíncronas a api */
/* put --- >  enviar alguma informação, disparar alguma action para o reducer */
