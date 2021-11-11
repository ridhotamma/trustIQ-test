export const CHANGE_SEARCH_FIELD = "CHANGE_SEARCH_FIELD";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});
