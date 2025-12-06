import { Layout } from "@/components/layout";
import { Home } from "@/pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/signin" element={<Login />} /> */}
        <Route element={<Layout />}>
          <Route path={"/"} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}