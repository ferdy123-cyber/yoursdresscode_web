import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Container/Admin";
import "antd/dist/antd.css";
import Login from "./Container/Login";
import { AdminRoute, NotLoginRoute } from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
        <Route
          path="/login"
          element={
            <NotLoginRoute>
              <Login />
            </NotLoginRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
