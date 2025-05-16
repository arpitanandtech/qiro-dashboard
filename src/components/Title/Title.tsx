import styles from "./Title.module.scss";
const Title = ({ title }: { title?: string }) => {
  return (
    <p className={styles.Title}>{title}</p>
  )
}

export default Title
