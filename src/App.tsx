import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Loading from "./components/Loading";
const Home = lazy(() => import("./routes/Home"));
const Menu = lazy(() => import("./routes/Menu"));
const Error = lazy(() => import("./routes/Error"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
