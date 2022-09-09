/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from "redux";

import { MoviesTypes, MoviesState } from "./types";

const INITIAL_STATE: MoviesState = {
  movies: [],
  moviesFavorite: [],
  cardBuy: [],
};

const reducer: Reducer<MoviesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesTypes.SET_MOVIES:
      const newMovies = action.payload.results.map((item: any) => {
        return {
          ...item,
          price: String(Math.ceil(Math.random() * Math.random() * 100)),
          poster_path: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          backdrop_path: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
        };
      });
      return { ...state, movies: newMovies };

    case MoviesTypes.SET_FAVORITE:
      return { ...state, moviesFavorite: action.payload };

    case MoviesTypes.SET_CARD_BUY:
      return { ...state, cardBuy: action.payload };

    default:
      return state;
  }
};

export default reducer;
