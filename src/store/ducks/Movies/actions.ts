import { action } from "typesafe-actions";

import { MoviesTypes, MoviesItemProps } from "./types";

export const setMoviesAction = (data: MoviesItemProps[]) =>
  action(MoviesTypes.SET_MOVIES, data);

// favorite
export const setMoviesFavoriteAction = (data: MoviesItemProps) =>
  action(MoviesTypes.SET_FAVORITE_ACTION, data);

export const removeMoviesFavoriteAction = (data: number) =>
  action(MoviesTypes.REMOVE_FAVORITE_ACTION, data);

export const removeAllMoviesFavoriteAction = () =>
  action(MoviesTypes.REMOVE_ALL_FAVORITE_ACTION);

// cardBuy
export const setCardBuyAction = (data: MoviesItemProps) =>
  action(MoviesTypes.SET_CARD_BUY_ACTION, data);

export const removeCardBuyAction = (data: number) =>
  action(MoviesTypes.REMOVE_CARD_BUY_ACTION, data);

export const removeAllCardBuyAction = () =>
  action(MoviesTypes.REMOVE_ALL_CARD_BUY_ACTION);
