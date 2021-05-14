import { NavLink, Link } from "react-router-dom";
import * as styles from "./header.module.css";
import logo from "images/vppr-darktext.svg";
import logoWhite from "images/vppr-whitetext.svg";
import { useThemeContext } from "context/theme-context";
function IndexHeader() {
  const { theme } = useThemeContext();
  return (
    <nav className={`header ${styles.header}`}>
      <Link to="/" className="link">
        <img
          src={theme === "dark" ? logoWhite : logo}
          className="logo"
          alt="VPPR"
        />
      </Link>
      <ul className={styles.headerItem}>
        <NavLink to="/login" className="link">
          <h3>Login</h3>
        </NavLink>
        <NavLink to="/register" className="link">
          <h3>Register</h3>
        </NavLink>
      </ul>
    </nav>
  );
}

export default IndexHeader;
