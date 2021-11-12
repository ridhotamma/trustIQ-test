export const getUsers = (json) => ({
  type: "GET_USERS_DATA",
  payload: json,
});

export const deleteUser = (id) => ({
  type: "DELETE_USER",
  payload: id,
});

export const updateUser = (id) => ({
  type: "UPDATE_USER",
  payload: id,
});

export const cleanUsersData = () => ({
  type: "CLEAN_USERS_DATA",
});

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
