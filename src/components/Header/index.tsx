/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton, Stack } from "@mui/material";
import { useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { setdDeviceAction } from "../../store/ducks/Utils/actions";
import { useAppDispatch } from "../../store/hooks";
import { InputSearch } from "../Inputs/InputSearch";
import * as S from "./styles";

type HeaderProps = {
  onOpenFavorite?: () => void;
  onOpenCartBuy?: () => void;
};

export function Header({ onOpenCartBuy, onOpenFavorite }: HeaderProps) {
  const { control } = useForm();

  const navegation = useNavigate();
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 768) {
        dispatch(setdDeviceAction("mobile"));
      } else {
        dispatch(setdDeviceAction("desktop"));
      }
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <S.Container>
      <S.Content>
        <S.BoxLeft>
          <img
            src="/images/logo1.svg"
            alt="Icone de Logo"
            onClick={() => navegation("/")}
          />
        </S.BoxLeft>
        <S.BoxSearch>
          <div>
            <InputSearch
              control={control}
              id="search"
              label="Pesquisar"
              name="search"
            />
          </div>
        </S.BoxSearch>
        <S.BoxRight>
          <Stack spacing={2} direction="row">
            <IconButton onClick={onOpenFavorite}>
              <FavoriteIcon color="info" />
            </IconButton>
            <IconButton onClick={onOpenCartBuy}>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon color="info" />
              </Badge>
            </IconButton>
          </Stack>
        </S.BoxRight>
      </S.Content>
    </S.Container>
  );
}
