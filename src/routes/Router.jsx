import { Routes, Route } from "react-router-dom";
import { RutasProtegidas } from "./RutasProtegidas";
//* Views
import { Home } from "../views/Home";
import { SignIn } from "../views/Login";
import Pruebas from "../views/Pruebas";
import { Index } from "../views/Index";
import { Admin } from "../views/Admin";



export const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/home" element={
        <RutasProtegidas>
          <Home />
        </RutasProtegidas>
      } />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/pruebas" element={<Pruebas />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};
