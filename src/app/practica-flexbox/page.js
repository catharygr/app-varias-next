import styles from "./flexBox.module.css";
export default function FlexBox() {
  return (
    <>
      <h2 className={styles.h2}>FlexBox</h2>
      <div className={styles.flexContainer}>
        <div>1</div>
        <div>2</div>
        <div className={styles.big}>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
      <h2 className={styles.h2}>Grid</h2>
      <div className={styles.gridContainer}>
        <div>1</div>
        <div>2</div>
        <div className={styles.big}>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
    </>
  );
}
