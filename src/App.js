import React from "react";
import RouterSite from "./router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontend from "./layouts/frontend";
import Backend from "./layouts/backend"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontend />}>
            {RouterSite.RouterPublic.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />
            })}
          </Route>

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
