import { useNavigate } from "react-router-dom";

import { removeAllCardBuyAction } from "../../../store/ducks/Movies/actions";
import { useAppDispatch } from "../../../store/hooks";
import * as B from "../../base/Buttons";
import * as T from "../../base/Text";
import Modal from "../index";
import * as S from "./styles";

interface IModalAddNewStructuredTable {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalSuccessPayment({
  isOpen,
  onClose,
}: IModalAddNewStructuredTable) {
  const dispatch = useAppDispatch();
  const navegate = useNavigate();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.ModalBody>
        <S.Header>
          <T.H2 size="1.6rem" margin="0 0 0 1rem">
            Obrigado Naruto Uzumake!
          </T.H2>
        </S.Header>
        <T.Paragraph>
          Sua compra foi realizada com sucesso, você receberá um e-mail com os
          detalhes da sua compra.
        </T.Paragraph>
        <S.Footer>
          <B.ButtonPrimary
            style={{
              width: "100%",
            }}
            onClick={() => {
              dispatch(removeAllCardBuyAction());
              navegate("/");
              onClose();
            }}
          >
            Ir para a loja
          </B.ButtonPrimary>
        </S.Footer>
      </S.ModalBody>
    </Modal>
  );
}
