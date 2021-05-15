import { NavLink, Link } from "react-router-dom";
import * as styles from "./header.module.css";
import logo from "images/vppr-darktext.svg";
import logoWhite from "images/vppr-whitetext.svg";
import { Menu } from "react-feather";
import { useThemeContext } from "context/theme-context";
function IndexHeader() {
  const { theme } = useThemeContext();
  return (
    <nav className={`header ${styles.header}`}>
      <Link to="/">
        <img
          src={theme === "dark" ? logoWhite : logo}
          className="logo"
          alt="VPPR"
        />
      </Link>
      <div className={styles.headerItem}>
        <NavLink to="/login" className="link">
          Login
        </NavLink>
        <NavLink to="/register" className="link">
          Register
        </NavLink>
      </div>
      <button className={`link ${styles.menuButton}`}>
        <Menu />
      </button>
    </nav>
  );
}

export default IndexHeader;
