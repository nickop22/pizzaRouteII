import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Spinner from "react-bootstrap/Spinner";
import { CartContext } from "../context/CartContext";
import { AuthContex } from "../context/AuthContex";

const Navegacion = () => {
  const { getQuantity, totalPrice } = useContext(CartContext);
  const { isLoggedIn, toggleLoginState } = useContext(AuthContex);
  console.log("isLoggedIn", isLoggedIn);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const toggleLoginState = () => setIsLoggedIn(prevState => !prevState);
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="navegacion">
      <Container>
        <Link to="/" className="text-decoration-none">
          <Spinner role="status" className="mx-3">
            <h3 className="pizza-spinner">🍕</h3>
          </Spinner>
          <Navbar.Brand>Mamma Mía</Navbar.Brand>
        </Link>

        <Nav
          className="me-auto my-4 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Link to="/" className="pt-2">
            <Button variant="outline-warning" className="text-white">
              🍕 Home
            </Button>
          </Link>

          {isLoggedIn ? (
            <>
              <Link to="/profile" className="mx-3 pt-2">
                <Button variant="outline-warning" className="text-white">
                  🔒 Profile
                </Button>
              </Link>
              <Link to="/" className="mx-3 pt-2">
                <Button
                  variant="outline-warning"
                  onClick={toggleLoginState}
                  className="text-white"
                >
                  🔒 Logout
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="mx-3 pt-2">
                <Button
                  variant="outline-warning"
                  onClick={toggleLoginState}
                  className="text-white"
                >
                  🔐 Login
                </Button>
              </Link>
              <Link to="/register" className="pt-2">
                <Button variant="outline-warning" className="text-white">
                  🔐 Register
                </Button>
              </Link>
            </>
          )}
        </Nav>

        <Nav className="justify-content-end ms-auto">
          <Link to="/cart">
            <Button variant="outline-light">
              🛒 Total: ${totalPrice} ({getQuantity()})
            </Button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
