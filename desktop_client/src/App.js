import "./App.css";
import React from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Nodes from "./views/nodes/Nodes";
import Sidebar from "./components/sidebar/Sidebar";
import BranchCRUDView from "./views/branch/Branch";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />}>
            <Route path="node" element={<Nodes />} />
            <Route path="branch" element={<BranchCRUDView />} />
            <Route path="history" element ={ "Hola Historial" } />
            <Route path="history/node" element ={ "Hola Historial por Nodo" } />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
