import { Route, Routes } from "react-router-dom";
import { routes } from "./routes.js";
export default function AppRoutes() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
}
