import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterSite from "./router";
import React from "react";

import Frontend from "./layouts/frontend";
import Backend from "./layouts/backend";

import Login from "./pages/frontend/Account/Login";
import Register from "./pages/frontend/Account/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public Frontend */}
          <Route path="/" element={<Frontend />}>
            {RouterSite.RouterPublic.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />
            })}
          </Route>


          {/* Login & Register */}
          <Route path="/login" element={<Login />}>
            {RouterSite.RouterLogin.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />
            })}
          </Route>

          <Route path="/register" element={<Register />}>
            {RouterSite.RouterRegister.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />
            })}
          </Route>


          {/* Private Backend */}
          <Route path="/admin" element={<Backend />}>
            {RouterSite.RouterPrivate.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
