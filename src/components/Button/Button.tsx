import styles from "./Button.module.scss";
import cx from "classnames";

const Button = ({ smallHeight, onClick, title, disabled }: { smallHeight?: boolean, onClick?: () => void, disabled?: boolean, title?: string }) => {
  return (
    <button onClick={onClick} className={cx('ripple', styles.Button, {
      [styles.Button__disabled]: disabled,
      [styles.Button__height]: smallHeight
    })}>{title}</button>
  )
}

export default Button
