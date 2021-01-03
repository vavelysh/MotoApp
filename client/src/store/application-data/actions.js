export const STORE_CATEGORIES = 'STORECATEGORIES';
export const STORE_SEASON_ID = 'STORESEASONID';
export const STORE_GRANDPRIXES = 'STOREGRANDPRIXES';

function store_categories(data) {
  return {
    type: STORE_CATEGORIES,
    payload: {
      data,
    },
  };
}
function store_seasonID(id) {
  return {
    type: STORE_SEASON_ID,
    payload: {
      id,
    },
  };
}
function store_grandPrixes(data) {
  return {
    type: STORE_GRANDPRIXES,
    payload: {
      data,
    },
  };
}
export { store_categories, store_seasonID, store_grandPrixes };
