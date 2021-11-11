import { CHANGE_SEARCH_FIELD } from "./actions";

const initialStateSearch = {
  searchField: "",
};

export const searchUsers = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
