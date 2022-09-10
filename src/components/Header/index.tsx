/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, FormControlLabel, IconButton, Stack } from "@mui/material";
import { ChangeEvent, useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  setdDeviceAction,
  setThemeAction,
} from "../../store/ducks/Utils/actions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { InputSearch } from "../Inputs/InputSearch";
import * as S from "./styles";

type HeaderProps = {
  onOpenFavorite?: () => void;
  onOpenCartBuy?: () => void;
};

export function Header({ onOpenCartBuy, onOpenFavorite }: HeaderProps) {
  const { control } = useForm();

  const {
    Movies: { cardBuy, moviesFavorite },
    Utils: {
      theme: { mode },
      device,
    },
  } = useAppSelector((state) => state);

  const navegation = useNavigate();
  const dispatch = useAppDispatch();

  const alterTheme = ({ currentTarget }: ChangeEvent<HTMLInputElement>) =>
    dispatch(setThemeAction(currentTarget.checked ? "dark" : "light"));

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
          <Stack direction="row">
            <IconButton onClick={onOpenFavorite}>
              <Badge badgeContent={moviesFavorite.length} color="secondary">
                <FavoriteIcon color="info" />
              </Badge>
            </IconButton>
            <IconButton onClick={onOpenCartBuy}>
              <Badge badgeContent={cardBuy.length} color="secondary">
                <ShoppingCartIcon color="info" />
              </Badge>
            </IconButton>
            {device === "desktop" && (
              <FormControlLabel
                control={
                  <S.MaterialUISwitch
                    checked={mode === "dark"}
                    onChange={alterTheme}
                  />
                }
                label=""
                style={{ margin: 0 }}
              />
            )}
          </Stack>
        </S.BoxRight>
      </S.Content>
    </S.Container>
  );
}
