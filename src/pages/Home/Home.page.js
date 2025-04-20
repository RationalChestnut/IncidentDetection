import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from "./Home.module.css";

export const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className={styles.container}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#2a2a2a" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 200, links: { opacity: 0.5 } },
              push: { quantity: 4 },
            },
          },
          particles: {
            color: { value: "#888" },
            links: {
              enable: true,
              distance: 150,
              color: "#888",
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: "bounce" },
            },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className={styles.particles}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>AutoResQ</h1>
        <p className={styles.description}>Detect accidents in real-time.</p>
        <NavLink to="/detect" className={styles.beginButton}>
          Begin
        </NavLink>
      </div>
    </div>
  );
};
