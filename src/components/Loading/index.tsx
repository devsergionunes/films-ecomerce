import { useAppSelector } from "../../store/hooks";
import * as S from "./styles";

export function Loading() {
  const loading = useAppSelector(({ Utils }) => Utils.loading);

  return (
    <S.Container open={loading}>
      <S.Progress />
    </S.Container>
  );
}

export function LoadingIntoComponent() {
  return (
    <S.ContainerLoadingIntoComponent>
      <S.Progress />
    </S.ContainerLoadingIntoComponent>
  );
}
