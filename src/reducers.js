export const Reducers = (state, action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_FIELD":
      return { ...state, searchTerm: action.payload };
    case "CHANGE_OPTION_FIELD":
      return { ...state, optionTerm: action.payload };
    case "RESET_SEARCH_FIELD":
      return { ...state, searchTerm: "" };
    case "RESET_OPTION_FIELD":
      return { ...state, optionTerm: "" };
    default:
      return state;
  }
};
