import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
