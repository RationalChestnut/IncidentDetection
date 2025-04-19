import React from "react";
import styles from "./SideBar.module.css";
import { FaMapPin } from "react-icons/fa6";

const accidents = [
  {
    id: 1,
    title: "Car Crash",
    time: "1m ago",
    location: "123 Main St, Springfield",
    description: "A sedan rear‑ended a delivery van at the intersection.",
    logs: [
      { type: "command", source: "AI", message: "Texting Police" },
      {
        type: "response",
        source: "AI",
        message: "Car Crash at 123 Main St, Springfield",
      },
      { type: "response", source: "Police", message: "Sending units now" },
      {
        type: "command",
        source: "AI",
        message: "Police have been notified and are on their way.",
      },
      { type: "command", source: "AI", message: "Calling Tow Truck" },
      {
        type: "response",
        source: "AI",
        message: "Vehicle damage reported, requesting tow service",
      },
      { type: "response", source: "Towing", message: "ETA 15 minutes" },
    ],
  },
  {
    id: 2,
    title: "Motorcycle Collision",
    time: "5m ago",
    location: "45 Elm St, Shelbyville",
    description: "Rider swerved to avoid debris and collided with guardrail.",
    logs: [
      { type: "command", source: "AI", message: "Texting Police" },
      {
        type: "response",
        source: "AI",
        message: "Motorcycle Collision at 45 Elm St, Shelbyville",
      },
      { type: "response", source: "Police", message: "Sending units now" },
      { type: "command", source: "AI", message: "Calling Paramedics" },
      {
        type: "response",
        source: "AI",
        message: "Motorcycle rider injured, requires medical assistance",
      },
      {
        type: "response",
        source: "PM",
        message: "Ambulance dispatched",
      },
    ],
  },
  {
    id: 3,
    title: "Truck Overturn",
    time: "10m ago",
    location: "Highway 101, Oakland",
    description: "Cargo truck flipped on off‑ramp, blocking two lanes.",
    logs: [
      { type: "command", source: "AI", message: "Notifying Highway Patrol" },
      {
        type: "response",
        source: "AI",
        message: "Truck Overturn on Highway 101, Oakland. All lanes blocked.",
      },
      { type: "response", source: "Highway Patrol", message: "Units en route" },
      { type: "command", source: "AI", message: "Alerting Traffic Management" },
      {
        type: "response",
        source: "Traffic",
        message: "Diverting traffic to alternate routes",
      },
    ],
  },
  {
    id: 4,
    title: "Pedestrian Hit",
    time: "15m ago",
    location: "Market St, San Francisco",
    description: "Foot traffic was heavy when a car struck a pedestrian.",
    logs: [
      { type: "command", source: "AI", message: "Texting Police" },
      {
        type: "response",
        source: "AI",
        message: "Pedestrian Hit at Market St, San Francisco",
      },
      { type: "response", source: "Police", message: "Sending units now" },
      {
        type: "command",
        source: "AI",
        message: "Police have been notified and are on their way.",
      },
      { type: "command", source: "AI", message: "Calling Paramedics" },
      {
        type: "response",
        source: "AI",
        message:
          "Pedestrian Hit at Market St, San Francisco. Requires urgent assistance",
      },
      { type: "response", source: "PM", message: "Sending units now" },
    ],
  },
];

export const SideBar = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Accidents</h1>
    <div className={styles.accidentContainer}>
      {accidents.map((acc) => (
        <div key={acc.id} className={styles.accident}>
          <div className={styles.row}>
            <h3 className={styles.accidentTitle}>{acc.title}</h3>
            <div className={styles.timeContainer}>{acc.time}</div>
          </div>
          <div className={styles.location}>
            <FaMapPin />
            {acc.location}
          </div>
          <p className={styles.description}>{acc.description}</p>
          <p className={styles.logs}>Logs:</p>
          <div className={styles.terminalContainer}>
            {acc.logs.map((log, index) => (
              <div key={index} className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>
                  {log.type === "command" ? "$" : ">"}
                </span>
                <span className={styles.terminalCommand}>{log.source}:</span>
                <span className={styles.terminalOutput}>{log.message}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
