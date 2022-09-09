/* eslint-disable @typescript-eslint/no-explicit-any */
import { put } from "redux-saga/effects";

import {
  CAR_BUY,
  getItem,
  LIST_FAVORITOS,
  setItem,
} from "../../../services/localStorage";
import { UtilsTypes } from "../Utils/types";
import { MoviesTypes } from "./types";

export function* setMoviesFavoriteSaga(payload: any) {
  try {
    const listFavorite = JSON.parse(getItem(LIST_FAVORITOS) || "[]");

    if (listFavorite.length) {
      const index = listFavorite.findIndex(
        (item: any) => item.id === payload.payload.id
      );
      if (index >= 0) {
        listFavorite.splice(index, 1);
      } else {
        listFavorite.push(payload.payload);
      }
      setItem(LIST_FAVORITOS, JSON.stringify(listFavorite));
    } else {
      setItem(LIST_FAVORITOS, JSON.stringify([payload.payload]));
    }
    yield put({
      type: MoviesTypes.SET_FAVORITE,
      payload: listFavorite.length ? listFavorite : [payload.payload],
    });
  } catch (error: any) {
    yield put({
      type: UtilsTypes.SET_TOAST,
      payload: {
        type: "error",
        message: error?.message || "Plataforma indisponível no momento",
      },
    });
  }
}

export function* removeMoviesFavoriteSaga(payload: any) {
  try {
    const listFavorite = JSON.parse(getItem(LIST_FAVORITOS) || "[]");
    const movieId = payload.payload;

    if (listFavorite.length) {
      const index = listFavorite.findIndex((item: any) => item.id === movieId);
      if (index >= 0) {
        listFavorite.splice(index, 1);
      }
      setItem(LIST_FAVORITOS, JSON.stringify(listFavorite));
    }

    yield put({
      type: MoviesTypes.SET_FAVORITE,
      payload: listFavorite,
    });
  } catch (error: any) {
    yield put({
      type: UtilsTypes.SET_TOAST,
      payload: {
        type: "error",
        message: error?.message || "Plataforma indisponível no momento",
      },
    });
  }
}

export function* removeAllMoviesFavoriteSaga() {
  try {
    setItem(LIST_FAVORITOS, JSON.stringify([]));
    yield put({
      type: MoviesTypes.SET_FAVORITE,
      payload: [],
    });
  } catch (error: any) {
    yield put({
      type: UtilsTypes.SET_TOAST,
      payload: {
        type: "error",
        message: error?.message || "Plataforma indisponível no momento",
      },
    });
  }
}

export function* setCardBuySaga(payload: any) {
  try {
    let listCarBuy = JSON.parse(getItem(CAR_BUY) || "[]");

    if (listCarBuy.length) {
      const itemCard = listCarBuy.find(
        (item: any) => item.id === payload.payload.id
      );
      if (itemCard?.id) {
        listCarBuy = listCarBuy.map((item: any) => {
          if (item.id === itemCard.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        listCarBuy.push({
          ...payload.payload,
          quantity: 1,
        });
      }
      setItem(CAR_BUY, JSON.stringify(listCarBuy));
    } else {
      setItem(
        CAR_BUY,
        JSON.stringify([
          {
            ...payload.payload,
            quantity: 1,
          },
        ])
      );
    }
    yield put({
      type: MoviesTypes.SET_CARD_BUY,
      payload: listCarBuy.length ? listCarBuy : [payload.payload],
    });
  } catch (error: any) {
    yield put({
      type: UtilsTypes.SET_TOAST,
      payload: {
        type: "error",
        message: error?.message || "Plataforma indisponível no momento",
      },
    });
  }
}

export function* removeCardBuySaga(payload: any) {
  try {
    const listCarBuy = JSON.parse(getItem(CAR_BUY) || "[]");
    const movieId = payload.payload;

    if (listCarBuy.length) {
      const index = listCarBuy.findIndex((item: any) => item.id === movieId);
      if (index >= 0) {
        listCarBuy.splice(index, 1);
      }
      setItem(CAR_BUY, JSON.stringify(listCarBuy));
    }

    yield put({
      type: MoviesTypes.SET_CARD_BUY,
      payload: listCarBuy,
    });
  } catch (error: any) {
    yield put({
      type: UtilsTypes.SET_TOAST,
      payload: {
        type: "error",
        message: error?.message || "Plataforma indisponível no momento",
      },
    });
  }
}

export function* removeAllCardBuySaga() {
  try {
    setItem(CAR_BUY, JSON.stringify([]));
    yield put({
      type: MoviesTypes.SET_CARD_BUY,
      payload: [],
    });
  } catch (error: any) {
    yield put({
      type: UtilsTypes.SET_TOAST,
      payload: {
        type: "error",
        message: error?.message || "Plataforma indisponível no momento",
      },
    });
  }
}
