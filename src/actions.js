export const setSearchField = (text) => ({
  type: "CHANGE_SEARCH_FIELD",
  payload: text,
});

export const setOptionField = (option) => ({
  type: "CHANGE_OPTION_FIELD",
  payload: option,
});

export const resetSearchField = () => ({
  type: "RESET_SEARCH_FIELD",
});

export const resetOptionField = () => ({
  type: "RESET_OPTION_FIELD",
});
