/* eslint-disable prettier/prettier */
import * as S from "./styles";

type DrawerProps = {
  open: boolean;
  children: React.ReactNode;
};

export function Drawer({ open, children }: DrawerProps) {
  return (
    <S.DrawerContainer
      sx={{
        "zIndex": 999,
        "position": "fixed",
        "display": open ? "block" : "none",
        "flexShrink": 0,
        "& .MuiDrawer-paper": {
          height: "91vh",
          marginTop: "9vh",
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <S.Container>{children}</S.Container>
    </S.DrawerContainer>
  );
}
