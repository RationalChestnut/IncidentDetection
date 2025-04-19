import styles from "./App.module.css";
import { Stream } from "./pages/streams/Stream.page";
import { SideBar } from "./pages/SideBar/SideBar.page";
function App() {
  return (
    <div className={styles.container}>
      <Stream />
      <SideBar />
    </div>
  );
}

export default App;
