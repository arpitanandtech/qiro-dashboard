
import styles from "./BoxContainer.module.scss";

const BoxContainer = ({ leftChildren, rightChildren }: { rightChildren?: React.ReactNode, leftChildren?: React.ReactNode }) => {
  return (
    <div className={styles.BoxContainer}>
      <div className={styles.BoxContainer__left}>
        {leftChildren}
      </div>
      <div className={styles.BoxContainer__right}>
        {rightChildren}
      </div>
    </div>
  )
}

export default BoxContainer
