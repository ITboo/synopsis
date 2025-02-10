import { TrpcProvider } from "./lib/trpc";
import "./App.css";
import List from "./List";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Item from "./Item";
import { getAllItemsRoute, getViewItemRoute, viewItemRouteParams } from "./lib/routes";

function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllItemsRoute()} element={<List />} />
          <Route
            path={getViewItemRoute(viewItemRouteParams)}
            element={<Item />}
          />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
}

export default App;
