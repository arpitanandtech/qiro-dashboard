import styles from "./Title.module.scss";
const MTitle = ({ title }: { title?: string }) => {
  return (
    <p className={styles.MTitle}>{title}</p>
  )
}

export default MTitle
