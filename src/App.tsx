import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Loading from "./components/Loading";
const Home = lazy(() => import("./routes/Home"));
import Menu from "./routes/Menu";
const Error = lazy(() => import("./routes/Error"));

function App() {
  return (
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
  );
}

export default App;
