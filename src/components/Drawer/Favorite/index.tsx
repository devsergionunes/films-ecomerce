import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, IconButton, Tooltip } from "@mui/material";

import { Drawer } from "..";

import {
  removeAllMoviesFavoriteAction,
  removeMoviesFavoriteAction,
  setCardBuyAction,
} from "../../../store/ducks/Movies/actions";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { formatMoney } from "../../../utils/utils";
import * as T from "../../base/Text";
import * as S from "../styles";

type DrawerFormProps = {
  open: boolean;
};

export function Favorite({ open }: DrawerFormProps) {
  const dispatch = useAppDispatch();
  const { moviesFavorite } = useAppSelector(({ Movies }) => Movies);
  return (
    <Drawer open={open}>
      <S.Content>
        <S.Header>
          <T.H6>Meus Favoritos</T.H6>
          <S.ButtonHeader
            onClick={() => dispatch(removeAllMoviesFavoriteAction())}
          >
            <T.Paragraph>Esvaziar</T.Paragraph>
          </S.ButtonHeader>
        </S.Header>
        <S.Body>
          {moviesFavorite.length
            ? moviesFavorite.map((item) => (
                <S.BoxProduct key={item.id}>
                  <Grid container spacing={1}>
                    <Grid item xs={2}>
                      <S.BoxProductImage src={item.backdrop_path} />
                    </Grid>
                    <Grid item xs={4} display="flex" alignItems="center">
                      <T.Paragraph size="0.875rem">{item.title}</T.Paragraph>
                    </Grid>
                    <Grid item xs={3} display="flex" alignItems="center">
                      <T.Span>{formatMoney(Number(item.price))}</T.Span>
                    </Grid>
                    <Grid item xs={3} display="flex" alignItems="center">
                      <IconButton
                        onClick={() => dispatch(setCardBuyAction(item))}
                      >
                        <Tooltip title="Adicona ao carrinho">
                          <AddShoppingCartIcon />
                        </Tooltip>
                      </IconButton>
                      <IconButton
                        onClick={() =>
                          dispatch(removeMoviesFavoriteAction(item.id))
                        }
                      >
                        <Tooltip title="Remover dos favoritos">
                          <DeleteIcon />
                        </Tooltip>
                      </IconButton>
                    </Grid>
                  </Grid>
                </S.BoxProduct>
              ))
            : null}
        </S.Body>
      </S.Content>
    </Drawer>
  );
}
