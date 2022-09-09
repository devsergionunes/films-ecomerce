/* eslint-disable react/jsx-props-no-spreading */
import { Button } from "@mui/material";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

type ButtonLinkProps = {
  to: string;
  variant?: "text" | "outlined" | "contained" | undefined;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  children: ReactNode;
  style?: React.CSSProperties;
};

export const ButtonPrimary = styled((props) => (
  <Button variant={props.variant || "contained"} {...props}>
    {props.children}
  </Button>
))`
  width: min-content;
  white-space: nowrap;
  /* width: clamp(150px, 300px, 100%); */
`;

export const ButtonSecondary = styled((props) => (
  <Button color="secondary" variant={props.variant || "outlined"} {...props}>
    {props.children}
  </Button>
))`
  white-space: nowrap;
  /* width: clamp(150px, 300px, 100%); */
`;

export const ButtonLink = styled(
  ({ color, variant, to, children, style }: ButtonLinkProps) => (
    <NavLink to={to}>
      <Button variant={variant || "outlined"} color={color} style={style}>
        {children}
      </Button>
    </NavLink>
  )
)`
  width: clamp(150px, 300px, 100%);
`;
