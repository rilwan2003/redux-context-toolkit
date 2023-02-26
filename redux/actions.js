const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

export const fetchItemsRequest = () => ({
  type: FETCH_ITEMS_REQUEST,
});

export const fetchItemsSuccess = (items) => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: items,
});

export const fetchItemsFailure = (error) => ({
  type: FETCH_ITEMS_FAILURE,
  payload: error,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const deleteItem = (itemId) => ({
  type: DELETE_ITEM,
  payload: itemId,
});
