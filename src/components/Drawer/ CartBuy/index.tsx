import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Drawer } from "..";

import {
  removeAllCardBuyAction,
  removeCardBuyAction,
} from "../../../store/ducks/Movies/actions";
import { setToastMessage } from "../../../store/ducks/Utils/actions";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { formatMoney, totalSumCardBuy } from "../../../utils/utils";
import { ButtonPrimary } from "../../base/Buttons";
import * as T from "../../base/Text";
import * as S from "../styles";

type DrawerFormProps = {
  open: boolean;
};

export function CartBuy({ open }: DrawerFormProps) {
  const navegate = useNavigate();
  const dispatch = useAppDispatch();
  const { cardBuy } = useAppSelector(({ Movies }) => Movies);

  return (
    <Drawer open={open}>
      <S.Content>
        <S.Header>
          <T.H6>Meu Carrinho</T.H6>
          <S.ButtonHeader onClick={() => dispatch(removeAllCardBuyAction())}>
            <T.Paragraph>Esvaziar</T.Paragraph>
          </S.ButtonHeader>
        </S.Header>
        <S.Body>
          {cardBuy.length
            ? cardBuy.map((item) => (
                <S.BoxProduct key={item.id}>
                  <Grid container spacing={1}>
                    <Grid item xs={2}>
                      <S.BoxProductImage src={item.backdrop_path} />
                    </Grid>
                    <Grid item xs={4} display="flex" alignItems="center">
                      <T.Paragraph size="0.875rem">{item.title}</T.Paragraph>
                    </Grid>
                    <Grid item xs={1} display="flex" alignItems="center">
                      <T.Span>{item.quantity}</T.Span>
                    </Grid>
                    <Grid item xs={3} display="flex" alignItems="center">
                      <T.Span>{formatMoney(Number(item.price))}</T.Span>
                    </Grid>
                    <Grid item xs={2} display="flex" alignItems="center">
                      <IconButton
                        onClick={() => dispatch(removeCardBuyAction(item.id))}
                      >
                        <Tooltip title="Remover do carrinho">
                          <DeleteIcon />
                        </Tooltip>
                      </IconButton>
                    </Grid>
                  </Grid>
                </S.BoxProduct>
              ))
            : null}
        </S.Body>
        <S.Footer>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <T.Paragraph>Subtotal</T.Paragraph>
            <T.Span
              style={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              {formatMoney(totalSumCardBuy(cardBuy))}
            </T.Span>
          </div>
          <ButtonPrimary
            sx={{
              width: "100%",
            }}
            onClick={() => {
              if (cardBuy.length) navegate("/checkout");
              else
                dispatch(
                  setToastMessage({
                    type: "error",
                    message: "Seu carrinho está vazio",
                  })
                );
            }}
          >
            Finalizar Compra
          </ButtonPrimary>
        </S.Footer>
      </S.Content>
    </Drawer>
  );
}
