import { useReducer, createContext } from "react";

type InitProp = {
  data: any;
};

const initialState: InitProp = {
  data: [],
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: "",
      };
    default: {
      return state;
    }
  }
};

export const useAppReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    ...initialState,
  };
};

export const AppContext = createContext({
  ...initialState,
  data: (test: any) => {},
});

export const AppProvider = AppContext.Provider;
