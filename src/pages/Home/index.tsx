import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import { IconButton, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";

import { ButtonPrimary } from "../../components/base/Buttons";
import * as T from "../../components/base/Text";
import { CartBuy } from "../../components/Drawer/ CartBuy";
import { Favorite } from "../../components/Drawer/Favorite";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import {
  removeMoviesFavoriteAction,
  setCardBuyAction,
  setMoviesAction,
  setMoviesFavoriteAction,
} from "../../store/ducks/Movies/actions";
import { setToastMessage } from "../../store/ducks/Utils/actions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { formatData, formatMoney } from "../../utils/utils";
import * as S from "./styles";

export function Home() {
  const [openCartBuy, setOpenCartBuy] = useState(false);
  const [openFavorite, setOpenFavorite] = useState(false);

  const dispatch = useAppDispatch();
  const { movies, moviesFavorite } = useAppSelector(({ Movies }) => Movies);

  const getDataMovies = async () => {
    try {
      const { data } = await api.get("/3/movie/popular");
      dispatch(setMoviesAction(data));
    } catch (error) {
      dispatch(
        setToastMessage({
          type: "error",
          message: "Erro ao buscar filmes",
        })
      );
    }
  };

  useEffect(() => {
    if (!movies.length) getDataMovies();
  }, []);

  return (
    <S.Conteiner>
      <Header
        onOpenCartBuy={() => {
          setOpenFavorite(false);
          setOpenCartBuy((state) => !state);
        }}
        onOpenFavorite={() => {
          setOpenCartBuy(false);
          setOpenFavorite((state) => !state);
        }}
      />
      <S.Content>
        <S.ContainerMovies>
          {movies.length
            ? movies.map((item) => (
                <S.CardMovies key={item.id}>
                  <S.CardMoviesHeader url={item.backdrop_path}>
                    <S.BoxBackDrop />
                    <S.BoxButtonFavorite>
                      {moviesFavorite.findIndex((f) => f.id === item.id) !==
                      -1 ? (
                        <Tooltip title="Remover dos favoritos">
                          <IconButton
                            onClick={() =>
                              dispatch(removeMoviesFavoriteAction(item.id))
                            }
                          >
                            <FavoriteIcon color="info" />
                          </IconButton>
                        </Tooltip>
                      ) : (
                        <Tooltip title="Adiciona dos favoritos">
                          <IconButton
                            onClick={() =>
                              dispatch(setMoviesFavoriteAction(item))
                            }
                          >
                            <FavoriteBorderIcon color="info" />
                          </IconButton>
                        </Tooltip>
                      )}
                    </S.BoxButtonFavorite>
                    <S.BoxDataLancamento>
                      <T.Span>{formatData(item.release_date)}</T.Span>
                    </S.BoxDataLancamento>
                  </S.CardMoviesHeader>
                  <S.CardMoviesBody>
                    <div>
                      <T.H6>{item.title}</T.H6>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <StarRateIcon color="action" />
                        <T.Span size="1rem">{item.vote_average}</T.Span>
                      </div>
                      <T.Span size="1rem">{item.genre_ids[0]}</T.Span>
                    </div>
                    <div>
                      <T.Paragraph>
                        {formatMoney(Number(item.price))}
                      </T.Paragraph>
                    </div>
                  </S.CardMoviesBody>
                  <ButtonPrimary
                    style={{
                      width: "100%",
                    }}
                    onClick={() => dispatch(setCardBuyAction(item))}
                  >
                    Adiciona ao Carrinho
                  </ButtonPrimary>
                </S.CardMovies>
              ))
            : null}
        </S.ContainerMovies>
        <CartBuy open={openCartBuy} />
        <Favorite open={openFavorite} />
      </S.Content>
    </S.Conteiner>
  );
}
