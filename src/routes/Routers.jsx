import React from "react";
import { Route, Routes } from "react-router-dom";

//pages

import Home from "../pages/Home";
import Confirmacao from "../pages/Confirmacao";
import Contato from "../pages/Contato";
import Info from "../pages/Info";
import Lista from "../pages/Lista";
import AddPresente from "../pages/gerente/addPresente";

const Routers = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/confirmacao" element={<Confirmacao />} />
            <Route path="/lista" element={<Lista />} />
            <Route path="/lista/add" element={<AddPresente />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/info" element={<Info />} />

        </Routes>
    </>
  );
};

export default Routers;