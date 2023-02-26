import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    ADD_ITEM,
    DELETE_ITEM,
  } from './actions';
  
  const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ITEMS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_ITEMS_SUCCESS:
        return {
          ...state,
          items: action.payload,
          loading: false,
        };
      case FETCH_ITEMS_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case ADD_ITEM:
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case DELETE_ITEM:
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default itemsReducer;
  