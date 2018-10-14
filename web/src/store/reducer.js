import axios from "axios";

const initialState = {
  activeTab: "1",
  error: false,
  errorMessage: "",
  tokenData: {},
  tokenPriceData: {},
  fetchTokenDataPending: false
};

//action types
const TAB_CHANGED = "TAB_CHANGED";

const FETCH_DATA_STARTED = "FETCH_DATA_STARTED";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

//action creators
export const changeTab = id => ({
  type: TAB_CHANGED,
  payload: id
});

export const fetchDataStarted = () => ({
  type: FETCH_DATA_STARTED
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data }
});

export const fetchDataError = errorMessage => ({
  type: FETCH_DATA_ERROR,
  payload: { errorMessage }
});

const DEFAULT_TOKEN_ADDRESS = "0xB8c77482e45F1F44dE1745F52C74426C631bDD52";

export const fetchDataEpic = (tokenAddress = DEFAULT_TOKEN_ADDRESS) => {
  return async dispatch => {
    try {
      dispatch(fetchDataStarted());
      const result = await axios.get(
        `http://api.ethplorer.io/getTokenInfo/${tokenAddress}?apiKey=freekey`
      );
      // console.log('fetched data', result)
      if(result.data.error){
          throw new Error(result.data.error)
      }
      dispatch(fetchDataSuccess(result.data));
    } catch (e) {
      console.error(e);
      dispatch(fetchDataError(e.message));
    }
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TAB_CHANGED:
      return {
        ...state,
        activeTab: action.payload
      };
    case FETCH_DATA_STARTED:
      return {
        ...state,
        error: false,
        errorMessage: "",
        fetchTokenDataPending: true
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        error: true,
        tokenData: {},
        tokenPriceData: {},
        errorMessage: action.payload.errorMessage,
        fetchTokenDataPending: false
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: false,
        errorMessage: '',
        tokenData: action.payload.data,
        tokenPriceData: action.payload.data.price,
        fetchTokenDataPending: false
      };
  }
  return state;
};

export default reducer;
