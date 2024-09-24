import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import "./global.css";
import styles from "./App.module.css";
import { SideBar } from "./components/SideBar/SideBar";
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            author="Jao"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo rem ullam harum blanditiis dolor nulla expedita fugiat deserunt qui eum."
          />
          <Post
            author="Gab"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo rem ullam harum blanditiis dolor nulla expedita fugiat deserunt qui eum."
          />
        </main>
      </div>
    </div>
  );
}
