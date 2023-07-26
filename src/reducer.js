export let reducer = (state, action) => {
  switch (action.type) {
    case "WAIT_LOADING":
      return {
        ...state,
        isLoading: "true",
      };
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        isLoading: false,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (currentElm) => currentElm.objectID !== action.payload
        ),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "NEXT_PAGE":
      let pageiNumber = state.page + 1;
      if (pageiNumber > 50) {
        pageiNumber = 0;
      }
      return {
        ...state,
        page: pageiNumber,
      };
    case "PREV_PAGE":
      let pageNumber = state.page - 1;
      if (pageNumber <= 0) {
        pageNumber = 0;
      }
      return {
        ...state,
        page: pageNumber,
      };

    default:
      return state;
  }
};
