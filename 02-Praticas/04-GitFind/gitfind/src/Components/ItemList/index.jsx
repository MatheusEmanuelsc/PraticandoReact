import styles from "./itemList.module.css";

export function ItemList({ title, desc }) {
  return (
    <div className={styles.itemList}>
      <strong>{title}</strong>
      <p>{desc}</p>
      <hr />
    </div>
  );
}
