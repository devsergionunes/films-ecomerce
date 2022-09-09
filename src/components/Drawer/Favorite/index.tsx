import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, IconButton, Tooltip } from "@mui/material";

import { Drawer } from "..";

import * as T from "../../base/Text";
import * as S from "../styles";

type DrawerFormProps = {
  open: boolean;
};

export function Favorite({ open }: DrawerFormProps) {
  return (
    <Drawer open={open}>
      <S.Content>
        <S.Header>
          <T.H6>Meus Favoritos</T.H6>
          <S.ButtonHeader>
            <T.Paragraph>Esvaziar</T.Paragraph>
          </S.ButtonHeader>
        </S.Header>
        <S.Body>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <S.BoxProduct key={item}>
              <Grid container spacing={1}>
                <Grid item xs={2}>
                  <S.BoxProductImage src="/images/iphone12.jpg" />
                </Grid>
                <Grid item xs={4} display="flex" alignItems="center">
                  <T.Paragraph size="0.875rem">Filme cla nla bksn</T.Paragraph>
                </Grid>
                <Grid item xs={3} display="flex" alignItems="center">
                  <T.Span>R$: 19,95</T.Span>
                </Grid>
                <Grid item xs={3} display="flex" alignItems="center">
                  <IconButton>
                    <Tooltip title="Adicona ao carrinho">
                      <AddShoppingCartIcon />
                    </Tooltip>
                  </IconButton>
                  <IconButton>
                    <Tooltip title="Remover dos favoritos">
                      <DeleteIcon />
                    </Tooltip>
                  </IconButton>
                </Grid>
              </Grid>
            </S.BoxProduct>
          ))}
        </S.Body>
      </S.Content>
    </Drawer>
  );
}
