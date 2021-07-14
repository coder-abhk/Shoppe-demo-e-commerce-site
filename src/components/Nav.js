import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav_logo">
        <img src={logo} alt="logo shoppe" />
      </div>

      <div className="nav_right">
        <p>
          <Link to="/">
            <HomeOutlinedIcon fontSize="small" />
          </Link>
        </p>
        <p>
          <Link to="/user">
            <AccountCircleOutlinedIcon fontSize="small" />
          </Link>
        </p>
        <p>
          <Link to="/cart">
            <ShoppingCartOutlinedIcon fontSize="small" />
          </Link>
        </p>
      </div>
    </nav>
  );
};

export default Nav;
