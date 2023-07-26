// context creation 🆗
//provider 🆗
//consumer lengthy remvoe replace 🆗
//use Context hooks 🆗
// to create provider function 🆗
import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
const appContext = React.createContext();
let api = "http://hn.algolia.com/api/v1/search?";

let initialstate = {
  isLoading: true,
  query: "javascript",
  nbPages: 0,
  page: 0,
  hits: [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  let getapidata = async (url) => {
    dispatch({ type: "WAIT_LOADING" });
    try {
      let response = await fetch(url);
      let data = await response.json();
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // to remove the post
  const removePost = (Id) => {
    dispatch({ type: "REMOVE_POST", payload: Id });
  };
  //search news
  const searchPost = (searchquery) => {
    dispatch({ type: "SEARCH_QUERY", payload: searchquery });
  };
  //pagination
  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };
  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };
  useEffect(() => {
    getapidata(`${api}query=${state.query}&page=${state.page}`);
  }, [state.query,state.page]);
  return (
    <appContext.Provider
      value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}
    >
      {children}
    </appContext.Provider>
  );
};
// custom hooks creation
const useGlobalContext = () => {
  return useContext(appContext);
};
export { appContext, AppProvider, useGlobalContext };
