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
    case "GET_USERS_DATA":
      return { ...state, users: action.payload };
    case "CLEAN_USERS_DATA":
      return { ...state, users: [] };
    // case "UPDATE_USER":
    //   return { ...state, newUsers: [...users, action.payload] };
    // case "DELETE_USER":
    //   return {...state, users: action.payload.filter(el => el._id )}
    default:
      return state;
  }
};
