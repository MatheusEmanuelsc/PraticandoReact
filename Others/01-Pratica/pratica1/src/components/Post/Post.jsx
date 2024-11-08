import styles from "./styles.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://gravatar.com/avatar/0ae5d5a8047a9915e940bb2010ec803b?s=150&d=mp&r=x"
          />
          <div className={styles.autorInfo}>
            <strong>Jao Bao</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time dateTime="2024-05-11 08:15:35">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Lorem, ipsum.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
          sapiente?
        </p>
        <p>
          <a href="">Lorem, ipsum dolor.</a>
        </p>
        <p>
          <a href="">Lorem, ipsum.</a>
        </p>
      </div>
    </article>
  );
}
