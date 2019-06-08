export const Types = {
  GET_REQUEST: 'playlistDetails/GET_REQUEST',
  GET_SUCCESS: 'playlistDetails/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default function playlistDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };

    default:
      return state;
  }
}

/*
data:{} um objeto ao invés de um array, pois retorna apenas um plalist.
playlists  2 --- > getPlaylistsRequest --- > action disparada pelo
componente para a requisição das playlists  ....  getPlaylistsSuccess ---
 > chamado pelo Saga , pego os dados (data) e passa para o reducer  */

export const Creators = {
  getPlaylistDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),
  getPlaylistDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
