/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Control, Controller } from "react-hook-form";

import { useAppSelector } from "../../store/hooks";

interface IInputSearch {
  control: Control<any>;
  id: string;
  label: string;
  name: string;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onClick?: () => void;
}

export function InputSearch({
  control,
  id,
  label,
  name,
  disabled,
  readOnly,
  required,
  onClick,
  errorMessage,
}: IInputSearch) {
  const {
    theme: { mode },
  } = useAppSelector(({ Utils }) => Utils);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel error={!!error?.message || !!errorMessage} htmlFor={id}>
              {label}
            </InputLabel>
            <OutlinedInput
              id={id}
              type="text"
              value={value || ""}
              size="small"
              onChange={onChange}
              readOnly={readOnly}
              required={required}
              disabled={disabled}
              error={!!error?.message || !!errorMessage}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="Buscar" onClick={onClick} edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              label={label}
              style={{
                backgroundColor: mode === "light" ? "#f5f5f5" : "#1e1e1e",
              }}
            />
          </FormControl>
        );
      }}
      rules={{
        required: {
          value: !!required,
          message: `${label} é obrigatório`,
        },
      }}
    />
  );
}
