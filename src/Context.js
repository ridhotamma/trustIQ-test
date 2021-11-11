import { createContext, useReducer } from "react";
import { Reducers } from "./Reducers";
const INITIAL_STATE = {
  searchTerm: "",
  optionTerm: "",
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducers, INITIAL_STATE);
  return (
    <Context.Provider
      value={{
        searchTerm: state.searchTerm,
        optionTerm: state.optionTerm,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
