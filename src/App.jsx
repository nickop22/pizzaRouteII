/* import Navegacion from "./componentes/Navegacion.jsx"; */
import Home from "./pages/Home.jsx";
import Footer from "./componentes/Footer.jsx";
import "./App.css";
import Registro from "./pages/Registro.jsx";
import Login from "./pages/Login.jsx";
import CarritoCompras from "./componentes/Cart.jsx";
import Pizza from "./pages/Pizza.jsx";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import Navegacion from "./componentes/Navegacion.jsx";
import NotFound from "./componentes/NotFound.jsx";
import Profile from "./componentes/Profile.jsx";
import Cart from "./componentes/Cart.jsx";
import CartProvider from "./context/CartContext.jsx";
import { useContext } from "react";
import { AuthContex } from "./context/AuthContext.jsx";

function App() {
  const { isLoggedIn } = useContext(AuthContex);
  return (
    <>
      <CartProvider>
        <Navegacion />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route
            path="/registro"
            element={isLoggedIn ? <Navigate to="/" /> : <Registro />}
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/carritoCompras" element={<Cart />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/404" element={<NotFound />} />
          <Route
            path="/profile"
            element={!isLoggedIn ? <Navigate to="/login" /> : <Profile />}
          />
        </Routes>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
