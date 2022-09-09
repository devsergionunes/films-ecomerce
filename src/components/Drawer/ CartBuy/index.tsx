import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Drawer } from "..";

import { ButtonPrimary } from "../../base/Buttons";
import * as T from "../../base/Text";
import * as S from "../styles";

type DrawerFormProps = {
  open: boolean;
};

export function CartBuy({ open }: DrawerFormProps) {
  const navegate = useNavigate();
  return (
    <Drawer open={open}>
      <S.Content>
        <S.Header>
          <T.H6>Meu Carrinho</T.H6>
          <S.ButtonHeader>
            <T.Paragraph>Esvaziar</T.Paragraph>
          </S.ButtonHeader>
        </S.Header>
        <S.Body>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (item) => (
              <S.BoxProduct key={item}>
                <Grid container spacing={1}>
                  <Grid item xs={2}>
                    <S.BoxProductImage src="/images/iphone12.jpg" />
                  </Grid>
                  <Grid item xs={4} display="flex" alignItems="center">
                    <T.Paragraph size="0.875rem">
                      Filme cla nla bksn
                    </T.Paragraph>
                  </Grid>
                  <Grid item xs={1} display="flex" alignItems="center">
                    <T.Span>1</T.Span>
                  </Grid>
                  <Grid item xs={3} display="flex" alignItems="center">
                    <T.Span>R$: 19,95</T.Span>
                  </Grid>
                  <Grid item xs={2} display="flex" alignItems="center">
                    <IconButton>
                      <Tooltip title="Remover do carrinho">
                        <DeleteIcon />
                      </Tooltip>
                    </IconButton>
                  </Grid>
                </Grid>
              </S.BoxProduct>
            )
          )}
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
              R$ 1.598,00
            </T.Span>
          </div>
          <ButtonPrimary
            sx={{
              width: "100%",
            }}
            onClick={() => navegate("/checkout")}
          >
            Finalizar Compra
          </ButtonPrimary>
        </S.Footer>
      </S.Content>
    </Drawer>
  );
}
