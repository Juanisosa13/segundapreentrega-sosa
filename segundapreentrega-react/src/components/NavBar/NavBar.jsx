import { Link } from "react-router-dom";
import "./nav.module.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav class="container">
      <Link to={"/"}>
        <h1 class="titulonav">GildaShop</h1>
      </Link>
      <div>
        <Link to={"/"}>
          <button className="btn btn-outline-dark mx-2">Home</button>
        </Link>
        <Link to={"/category/calzados"}>
          <button className="btn btn-outline-dark mx-2">Calzados</button>
        </Link>
        <Link to={"/category/ropa"}>
          <button className="btn btn-outline-dark mx-2">Ropa</button>
        </Link>
      </div>
      <CartWidget />
    </nav>
  );
};