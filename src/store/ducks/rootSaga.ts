import { all, takeLatest } from "redux-saga/effects";

import {
  setCardBuySaga,
  setMoviesFavoriteSaga,
  removeAllMoviesFavoriteSaga,
  removeMoviesFavoriteSaga,
  removeAllCardBuySaga,
  removeCardBuySaga,
} from "./Movies/sagas";
import { MoviesTypes } from "./Movies/types";

export default function* rootSaga() {
  yield all([
    // userSaga
    takeLatest(MoviesTypes.SET_FAVORITE_ACTION, setMoviesFavoriteSaga),
    takeLatest(MoviesTypes.REMOVE_FAVORITE_ACTION, removeMoviesFavoriteSaga),
    takeLatest(
      MoviesTypes.REMOVE_ALL_FAVORITE_ACTION,
      removeAllMoviesFavoriteSaga
    ),
    takeLatest(MoviesTypes.SET_CARD_BUY_ACTION, setCardBuySaga),
    takeLatest(MoviesTypes.REMOVE_ALL_CARD_BUY_ACTION, removeAllCardBuySaga),
    takeLatest(MoviesTypes.REMOVE_CARD_BUY_ACTION, removeCardBuySaga),
  ]);
}
