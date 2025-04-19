import React, { useEffect, useState } from "react";
import styles from "./Stream.module.css";
import { getLatestFrame, getStreams } from "../../api/routes";

export const Stream = () => {
  const [streamsList, setStreamsList] = useState([]);
  const [frames, setFrames] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const data = await getStreams();
        if (data?.streams) setStreamsList(data.streams);
      } catch (err) {
        console.error("getStreams error", err);
      }
    })();
  }, []);

  useEffect(() => {
    if (!streamsList.length) return;
    const handles = streamsList.map(({ id }) =>
      setInterval(async () => {
        try {
          const result = await getLatestFrame(id);
          const b64 = result?.frame;
          if (!b64) {
            console.warn(`Empty frame for stream ${id}`);
            return;
          }
          const clean = b64.replace(/^data:image\/\w+;base64,/, "");
          setFrames((prev) => ({ ...prev, [id]: clean }));
        } catch (err) {
          console.error("poll frame error", id, err);
        }
      }, 1000 / 30)
    );
    return () => handles.forEach(clearInterval);
  }, [streamsList]);

  if (!streamsList.length) {
    return <div className={styles.placeholder}>Loading streams…</div>;
  }

  return (
    <div className={styles.streamContainer}>
      {streamsList.map(({ id, location }) => (
        <div key={id} className={styles.stream}>
          <div className={styles.videoWrapper}>
            {frames[id] ? (
              <img
                src={`data:image/jpeg;base64,${frames[id]}`}
                alt={`Live stream ${id}`}
                className={styles.videoElement}
                onError={(e) =>
                  console.error("image load failed:", e.target.src)
                }
              />
            ) : (
              <div className={styles.placeholder}>Loading frame…</div>
            )}
            <div className={styles.gradientOverlay} />
            <h3 className={styles.label}>{location}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
