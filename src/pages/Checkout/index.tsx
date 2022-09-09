/* eslint-disable react/jsx-props-no-spreading */
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { ButtonPrimary } from "../../components/base/Buttons";
import * as T from "../../components/base/Text";
import { CartBuy } from "../../components/Drawer/ CartBuy";
import { Favorite } from "../../components/Drawer/Favorite";
import { Header } from "../../components/Header";
import { InputBase } from "../../components/Inputs/InputText";
import { ModalSuccessPayment } from "../../components/ModalsComponents/WarningSendSolicitation";
import { MoviesMock } from "./Mock";
import * as S from "./styles";

export function Checkout() {
  const { control } = useForm();
  const [openCartBuy, setOpenCartBuy] = useState(false);
  const [openFavorite, setOpenFavorite] = useState(false);

  const [openModalSuccesPayment, setOpenModalSuccesPayment] = useState(false);

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
        <S.Body>
          <S.BoxLeft container spacing={1}>
            <Grid item xs={12}>
              <T.H6 size="1.5rem">Finalizar Compra</T.H6>
            </Grid>
            <Grid item xs={12}>
              <InputBase control={control} id="name" name="name" label="Nome" />
            </Grid>
            <Grid item xs={6}>
              <InputBase
                control={control}
                id="cpf"
                name="cpf"
                label="CPF"
                type="cpf"
              />
            </Grid>
            <Grid item xs={6}>
              <InputBase
                control={control}
                id="phone"
                name="phone"
                label="Celular"
                type="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <InputBase
                control={control}
                id="email"
                name="email"
                label="E-mail"
                type="email"
              />
            </Grid>
            <Grid item xs={5}>
              <InputBase
                control={control}
                id="zipCode"
                name="zipCode"
                label="CEP"
                type="cep"
              />
            </Grid>
            <Grid item xs={7}>
              <InputBase
                control={control}
                id="address"
                name="address"
                label="Endereço"
              />
            </Grid>
            <Grid item xs={6}>
              <InputBase
                control={control}
                id="city"
                name="city"
                label="Cidade"
              />
            </Grid>
            <Grid item xs={6}>
              <InputBase
                control={control}
                id="state"
                name="state"
                label="Estado"
              />
            </Grid>
          </S.BoxLeft>
          <S.BoxRight>
            <S.BoxItemCheckout container spacing={1}>
              <Grid item xs={2}>
                <T.Paragraph weight="600">Imagem</T.Paragraph>
              </Grid>
              <Grid item xs={4}>
                <T.Paragraph weight="600">Nome</T.Paragraph>
              </Grid>
              <Grid item xs={2} display="flex">
                <T.Paragraph weight="600" textAlign="center">
                  Qtd
                </T.Paragraph>
              </Grid>
              <Grid item xs={4} display="flex" justifyContent="center">
                <T.Paragraph weight="600">Preço</T.Paragraph>
              </Grid>
            </S.BoxItemCheckout>
            {MoviesMock.length &&
              MoviesMock.map((item, index) => (
                <S.BoxItemCheckout
                  container
                  spacing={1}
                  key={item.id}
                  {...(index !== MoviesMock.length - 1 && {
                    paddingBottom: "1rem",
                    borderBottom: "2px solid #ccc",
                  })}
                >
                  <Grid item xs={2}>
                    <S.BoxImage url={item.banner} />
                  </Grid>
                  <Grid item xs={4} display="flex" alignItems="center">
                    <T.Paragraph>{item.title}</T.Paragraph>
                  </Grid>
                  <Grid item xs={2} display="flex" alignItems="center">
                    <T.Paragraph textAlign="center">1</T.Paragraph>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <T.Paragraph>R$: {item.price}</T.Paragraph>
                    <IconButton>
                      <Tooltip title="Remover">
                        <DeleteIcon />
                      </Tooltip>
                    </IconButton>
                  </Grid>
                </S.BoxItemCheckout>
              ))}

            <S.BoxItemCheckout container spacing={1} marginTop="1rem">
              <Grid item xs={9}>
                <T.Paragraph weight="600" size="1.3rem">
                  Total
                </T.Paragraph>
              </Grid>
              <Grid item xs={3}>
                <T.Paragraph weight="600" size="1.3rem" textAlign="end">
                  59,98
                </T.Paragraph>
              </Grid>
              <Grid item xs={12} marginTop="1rem">
                <ButtonPrimary
                  style={{
                    width: "100%",
                  }}
                  onClick={() => setOpenModalSuccesPayment(true)}
                >
                  Finalizar compra
                </ButtonPrimary>
              </Grid>
            </S.BoxItemCheckout>
          </S.BoxRight>
        </S.Body>
      </S.Content>

      <CartBuy open={openCartBuy} />
      <Favorite open={openFavorite} />

      <ModalSuccessPayment
        isOpen={openModalSuccesPayment}
        onClose={() => setOpenModalSuccesPayment(false)}
      />
    </S.Conteiner>
  );
}
