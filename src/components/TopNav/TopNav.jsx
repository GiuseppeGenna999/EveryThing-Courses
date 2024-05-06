import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import styles from "./Header.module.css";

export function TopNav() {
  const { user } = useContext(AuthContext); // Use useContext to get the user object

  return (
    <header className={styles.header}>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <a className='navbar-brand' href="/">
          <img className={styles.logo} src="https://ideogram.ai/api/images/direct/XKAYe6bxRI-2vXs-apeYlA.png" alt="Formula 1 Gare" />
        </a>
        <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id="navbarSupportedContent">
          <ul className='navbar-nav ml-auto'>
            <li>
              <a className='nav-link' href="/Profile">{user.firstName}</a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href="/">Home</a>
            </li>
            <li className='nav-item'>
              <a className="nav-link" href="/courses">Courses</a>
            </li>
          </ul>
          </div>
        </nav>
      </header>
    );
}