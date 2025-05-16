import styles from "./Card.module.scss";
import cx from "classnames";

const Card = ({ children, isUp, noPadding }: { children: React.ReactNode, isUp?: boolean, noPadding?: boolean }) => {
  return (
    <div className={cx(styles.Card, { [styles.box]: isUp, [styles.noPadding]: noPadding })}>
      {children}
    </div>
  )
}

export default Card
