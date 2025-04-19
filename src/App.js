import { NavLink } from "react-router-dom";
import styles from "./App.module.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.page";
import { Stream } from "./pages/streams/Stream.page";
import { SideBar } from "./pages/SideBar/SideBar.page";

export const NavBar = () => (
  <nav className={styles.nav}>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.active : ""}`
      }
    >
      <h1 className={styles.navTitle}>AccidentAI</h1>
    </NavLink>

    <div className={styles.links}>
      <NavLink
        to="/detect"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
      >
        Detect
      </NavLink>
    </div>
  </nav>
);

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <NavBar />
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/detect"
              element={
                <>
                  <Stream />
                  <SideBar />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
