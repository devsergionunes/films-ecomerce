/* eslint-disable react/require-default-props */
import { Backdrop } from "@mui/material";
import { ReactNode } from "react";

import * as S from "./styles";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

function Modal({ children, isOpen, onClose }: ModalProps) {
  return (
    <S.Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <S.Fade in={isOpen}>
        <div>{children}</div>
      </S.Fade>
    </S.Modal>
  );
}

export default Modal;
