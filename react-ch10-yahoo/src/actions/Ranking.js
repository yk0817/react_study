import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';

const API_URL = 'https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking';
const APP_ID = 'dj00aiZpPUtHTGhyNnhTYUlpaiZzPWNvbnN1bWVyc2VjcmV0Jng9ODg';

const startRequest = categoryId => ({
  type: 'START_REQUEST',
  payload: { categoryId },
});

// レスポンス受信
const receiveData = (categoryId, error, response) => ({
  type: "RECEIVE_DATA",
  payload: { categoryId, error, response },
});

// リクエスト完了
const finishRequest = categoryId => ({
  type: 'FINISH_REQUEST',
  payload: { categoryId },
});

// ランキングを取得する
export const fetchRanking = categoryId => {
  // redux-thunk
  return async dispatch => {
    dispatch(startRequest(categoryId));

    const queryString = qs.stringify({
      appid: APP_ID,
      category_id: categoryId,
    });

    try {
      const responce = await fetchJsonp(`${API_URL}?${queryString}`);
      const data = await responce.json();
      dispatch(receiveData(categoryId, null, data));
    } catch (e) {
      dispatch(receiveData(categoryId, e));
    }
    dispatch(finishRequest(categoryId));
  }
}
