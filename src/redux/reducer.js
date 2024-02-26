import {
  ADD_TAB,
  CLOSE_TAB,
  SWITCH_TAB,
  LOAD_CONTENT,
  UPDATE_URL,
  UPDATE_SEARCH_VALUE,
  UPDATE_SEARCH_RESULTS,
} from "./action";

const initialState = {
  tabs: [{ title: "Tab ", url: "", active: true, searchQuery: "", results: [] }],
  currentTabIndex: 0,
};

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TAB:
      return {
        ...state,
        tabs: [...state.tabs, { title: "Tab ", url: "" }],
        currentTabIndex: state.tabs.length,
      };
    case CLOSE_TAB:
      const updatedTabs = state.tabs.filter(
        (_, index) => index !== action.payload
      );
      const newCurrentTabIndex = Math.min(
        state.currentTabIndex,
        updatedTabs.length - 1
      );
      return {
        ...state,
        tabs: updatedTabs,
        currentTabIndex: newCurrentTabIndex,
      };
    case SWITCH_TAB:
      return {
        ...state,
        currentTabIndex: action.payload,
      };
    case LOAD_CONTENT:
      const updatedTabsContent = [...state.tabs];
      if (updatedTabsContent[action.payload.tabIndex]) {
        updatedTabsContent[action.payload.tabIndex].url = action.payload.url;
      }
      return {
        ...state,
        tabs: updatedTabsContent,
      };
    case UPDATE_URL:
      const updatedTabsUrl = [...state.tabs];
      if (updatedTabsUrl[action.payload.tabIndex]) {
        updatedTabsUrl[action.payload.tabIndex].url = action.payload.url;
      }
      return {
        ...state,
        tabs: updatedTabsUrl,
      };

      case UPDATE_SEARCH_VALUE:
        const updateTabSearchQuery = [...state.tabs];
        console.log(action.payload,"payload")
        updateTabSearchQuery[action.payload.tabIndex].searchQuery=action.payload.value
        return{
          ...state,
        tabs:updateTabSearchQuery
        }
        case  UPDATE_SEARCH_RESULTS:
          const updateSearchResults = [...state.tabs];
          console.log(action.payload,"payload")
          updateSearchResults[action.payload.tabIndex].results=action.payload.value
          return{
            ...state,
          tabs:updateSearchResults
          }
        
    default:
      return state;
  }
};

export default tabsReducer;
