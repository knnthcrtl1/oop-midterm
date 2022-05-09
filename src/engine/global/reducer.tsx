import { useReducer, createContext, useCallback } from "react";

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
        data: action.data,
      };
    default: {
      return state;
    }
  }
};

export const useAppReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setData = useCallback(
    (data: any) => {
      dispatch({ type: "SET_DATA", data });
    },
    [dispatch]
  );

  return {
    ...initialState,
    setData
  };
};

export const AppContext = createContext({
  ...initialState,
  data: (test: any) => {},
});

export const AppProvider = AppContext.Provider;
