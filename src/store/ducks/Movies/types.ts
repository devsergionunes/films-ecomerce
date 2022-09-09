/**
 * Action types
 */
export enum MoviesTypes {
  SET_MOVIES = "@movies/SET_MOVIES",
  SET_FAVORITE = "@movies/SET_FAVORITE",
  SET_FAVORITE_ACTION = "@movies/SET_FAVORITE_ACTION",
  REMOVE_FAVORITE_ACTION = "@movies/REMOVE_FAVORITE_ACTION",
  REMOVE_ALL_FAVORITE_ACTION = "@movies/REMOVE_ALL_FAVORITE_ACTION",
  SET_CARD_BUY = "@movies/SET_CARD_BUY",
  SET_CARD_BUY_ACTION = "@movies/SET_CARD_BUY_ACTION",
  REMOVE_CARD_BUY_ACTION = "@movies/REMOVE_CARD_BUY_ACTION",
  REMOVE_ALL_CARD_BUY_ACTION = "@movies/REMOVE_ALL_CARD_BUY_ACTION",
}

/**
 * valores isolados do objeto de parametros
 */
export type MoviesItemProps = {
  id: number;
  title: string;
  favorite: boolean;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  genre_ids: number[];
  price: string;
};

export type ListFavoritosProps = MoviesItemProps[];

export type CardBuyProps = MoviesItemProps & { quantity: number };

/**
 * valores do state completo desse redux
 */
export type MoviesState = {
  readonly movies: MoviesItemProps[];
  readonly cardBuy: CardBuyProps[];
  readonly moviesFavorite: ListFavoritosProps;
};
