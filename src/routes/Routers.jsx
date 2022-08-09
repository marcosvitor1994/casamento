import React from "react";
import { Route, Routes } from "react-router-dom";

//pages

import Home from "../pages/Home";
import Confirmacao from "../pages/Confirmacao";
import Contato from "../pages/Contato";
import Info from "../pages/Info";
import Lista from "../pages/Lista";
import AddPresente from "../pages/gerente/addPresente";
import ListaConvidados from "../pages/gerente/listaConvidados";
import Login from "../pages/Login";
import EscolhaPresentes from "../pages/gerente/escolhaPresentes";
import Gerente from "../pages/gerente/Gerente";

const Routers = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/confirmacao" element={<Confirmacao />} />
            <Route path="/lista" element={<Lista />} />
            <Route path="/lista/add" element={<AddPresente />} />
            <Route path="/lista/escolhas" element={<EscolhaPresentes />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/info" element={<Info />} />

            <Route path="/login" element={<Login />} />
            <Route path="/gerente" element={<Gerente />} />
            <Route path="/confirmacao/lista" element={<ListaConvidados />} />

        </Routes>
    </>
  );
};

export default Routers;