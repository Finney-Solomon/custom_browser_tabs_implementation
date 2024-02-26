export const ADD_TAB = 'ADD_TAB';
export const CLOSE_TAB = 'CLOSE_TAB';
export const SWITCH_TAB = 'SWITCH_TAB';
export const LOAD_CONTENT = 'LOAD_CONTENT';
export const UPDATE_URL = 'UPDATE_URL';
export const  UPDATE_SEARCH_VALUE ='UPDATE_SEARCH_VALUE'
export const UPDATE_SEARCH_RESULTS='UPDATE_SEARCH_RESULTS'

export const addTab = () => ({
  type: ADD_TAB,
});

export const closeTab = (tabIndex) => ({
  type: CLOSE_TAB,
  payload: tabIndex,
});

export const switchTab = (tabIndex) => ({
  type: SWITCH_TAB,
  payload: tabIndex,
});

export const loadContent = (tabIndex, url) => ({
  type: LOAD_CONTENT,
  payload: { tabIndex, url },
});

export const updateUrl = (tabIndex, newUrl) => ({
  type: UPDATE_URL,
  payload: { tabIndex, newUrl },
});



export const searchValue = (value,tabIndex, ) => (console.log(tabIndex, value,"hi"),{
  type: UPDATE_SEARCH_VALUE,
  payload: { tabIndex, value },
});


export const searchResults = (value, tabIndex) => ({
  type: UPDATE_SEARCH_RESULTS,
  payload: { tabIndex, value },
});



