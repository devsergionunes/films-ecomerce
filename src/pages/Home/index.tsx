import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";

import { ButtonPrimary } from "../../components/base/Buttons";
import * as T from "../../components/base/Text";
import { CartBuy } from "../../components/Drawer/ CartBuy";
import { Favorite } from "../../components/Drawer/Favorite";
import { Header } from "../../components/Header";
import { MoviesMock } from "./Mock";
import * as S from "./styles";

export function Home() {
  const [openCartBuy, setOpenCartBuy] = useState(false);
  const [openFavorite, setOpenFavorite] = useState(false);

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
          {MoviesMock.length &&
            MoviesMock.map((item) => (
              <S.CardMovies key={item.id}>
                <S.CardMoviesHeader url={item.banner}>
                  <S.BoxBackDrop />
                  <S.BoxButtonFavorite>
                    <IconButton>
                      {item.isFavorite ? (
                        <Tooltip title="Remover dos favoritos">
                          <FavoriteIcon color="info" />
                        </Tooltip>
                      ) : (
                        <Tooltip title="Adiciona dos favoritos">
                          <FavoriteBorderIcon color="info" />
                        </Tooltip>
                      )}
                    </IconButton>
                  </S.BoxButtonFavorite>
                  <S.BoxDataLancamento>
                    <T.Span>{item.dt_lancamento}</T.Span>
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
                      <T.Span size="1rem">{item.stars}</T.Span>
                    </div>
                    <T.Span size="1rem">{item.genres[0]}</T.Span>
                  </div>
                  <div>
                    <T.Paragraph>R$: {item.price}</T.Paragraph>
                  </div>
                </S.CardMoviesBody>
                <ButtonPrimary
                  style={{
                    width: "100%",
                  }}
                >
                  Adiciona ao Carrinho
                </ButtonPrimary>
              </S.CardMovies>
            ))}
        </S.ContainerMovies>
        <CartBuy open={openCartBuy} />
        <Favorite open={openFavorite} />
      </S.Content>
    </S.Conteiner>
  );
}
