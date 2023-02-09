import React from "react"

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/main/Navbar";

function AppRouter () {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route>
                <Route path="/" element={<Dashboard />} exact />
            </Route>
        </Routes>
    </BrowserRouter>
  )
};

export default AppRouter;
