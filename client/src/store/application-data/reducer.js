import {
  STORE_CATEGORIES,
  STORE_SEASON_ID,
  STORE_GRANDPRIXES,
} from './actions';

const initialState = {
  categories: null,
  currentSeasonId: null,
  grandPrixesOfSeason: null,
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_CATEGORIES:
      return {
        ...state,
        categories: action.payload.data,
      };
    case STORE_SEASON_ID:
      return {
        ...state,
        currentSeasonId: action.payload.id,
      };
    case STORE_GRANDPRIXES:
      return {
        ...state,
        grandPrixesOfSeason: action.payload.data,
      };
    default:
      return state;
  }
}

export { categoryReducer };
