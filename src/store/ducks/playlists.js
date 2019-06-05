export const Types = {
  GET_REQUEST: 'playlists/GET_REQUEST',
  GET_SUCCESS: 'playlists/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };

    default:
      return state;
  }
}

/* playlists  2 --- > getPlaylistsRequest --- > action disparada pelo
componente para a requisição das playlists  ....  getPlaylistsSuccess ---
 > chamado pelo Saga , pego os dados (data) e passa para o reducer  */

export const Creators = {
  getPlaylistsRequest: () => ({ type: Types.GET_REQUEST }),
  getPlaylistsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
