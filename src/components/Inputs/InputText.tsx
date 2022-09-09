/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import { Control, Controller } from "react-hook-form";

import {
  cepMask,
  cnpjMask,
  cpfMask,
  dateMask,
  moneyMask,
  telMask,
} from "../../utils/mask";
import * as S from "./styles";

interface IInputBase {
  control: Control<any>;
  id: string;
  label: string;
  name: string;
  defaultValue?: string | number;
  maxLength?: number;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  type?: string;
  rules?: any;
  isErrorMessage?: boolean;
}

const setMask = (type: string | undefined, value: string) => {
  switch (type) {
    case "data":
      return dateMask(value);
    case "currency":
      return moneyMask(value);
    case "phone":
      return telMask(value);
    case "cpf":
      return cpfMask(value);
    case "cnpj":
      return cnpjMask(value);
    case "cep":
      return cepMask(value);
    default:
      return value;
  }
};

export function InputBase({
  control,
  id,
  label,
  name,
  type,
  disabled,
  maxLength,
  readOnly,
  defaultValue,
  required,
  errorMessage,
  rules,
  isErrorMessage,
}: IInputBase) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <S.InputBase
            id={id}
            label={label}
            variant="outlined"
            value={value ? setMask(type, value) : ""}
            name={name}
            disabled={disabled}
            onChange={onChange}
            inputProps={{
              maxLength: Number(maxLength) || 200,
              readOnly: !!readOnly,
            }}
            type={type || "text"}
            fullWidth
            size="small"
            error={!!error?.message || !!errorMessage}
            helperText={
              isErrorMessage === false
                ? ""
                : error?.message || errorMessage || " "
            }
          />
        );
      }}
      rules={{
        required: {
          value: !!required,
          message: `${label} é obrigatório`,
        },
        ...rules,
      }}
    />
  );
}
