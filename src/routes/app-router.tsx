import { Layout } from "@/components/layout";
import { Home } from "@/pages/home";
import { Login } from "@/pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path={"/"} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}