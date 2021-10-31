import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">
        <Link to="/" className="link">
          React-Router
        </Link>
      </h1>
      <nav className="nav">
        <ul className="items">
          <li className="item">
            <Link to="/" className="link">
              Hero
            </Link>
            <span></span>
          </li>
          <li className="item">
            <Link to="/user" className="link">
              User Random
            </Link>
            <span></span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
