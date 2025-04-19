import React from "react";
import styles from "./Stream.module.css";

const streams = [
  {
    video: require("../../assets/accident.mov"),
    location: "New York, 511 Street",
  },
  {
    video: require("../../assets/accident.mov"),
    location: "Boston, Main Avenue",
  },
  {
    video: require("../../assets/accident.mov"),
    location: "Chicago, Lake Drive",
  },
  {
    video: require("../../assets/accident.mov"),
    location: "Los Angeles, Palm Street",
  },
];

export const Stream = () => {
  return (
    <div className={styles.streamContainer}>
      {streams.map((stream, index) => {
        return (
          <div key={index} className={styles.stream}>
            <div className={styles.videoWrapper}>
              <video
                src={stream.video}
                autoPlay
                muted
                className={styles.videoElement}
                loop
              />
              <div className={styles.gradientOverlay}></div>
              <h3 className={styles.label}>{stream.location}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
