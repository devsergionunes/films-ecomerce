import { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { api } from "./services/api";
import {
  getItem,
  setSessionId,
  CAR_BUY,
  LIST_FAVORITOS,
} from "./services/localStorage";
import { MoviesTypes } from "./store/ducks/Movies/types";
import { useAppDispatch } from "./store/hooks";

export function MyRoutes() {
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/3/authentication/guest_session/new");
        setSessionId(data.guest_session_id);
        dispatch({
          type: MoviesTypes.SET_FAVORITE,
          payload: JSON.parse(getItem(LIST_FAVORITOS) || "[]"),
        });
        dispatch({
          type: MoviesTypes.SET_CARD_BUY,
          payload: JSON.parse(getItem(CAR_BUY) || "[]"),
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
