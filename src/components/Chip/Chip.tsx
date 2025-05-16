import styles from "./Chip.module.scss";
import cx from 'classnames';

const Chip = ({ isNew, isModal, isSecondary, onClick, isGrey, isSmall, isFull, isTrans, isImg, img, title, isPrimary, isNot, noti, isNotLeft }: { isNew?: boolean, isModal?: boolean, isNotLeft?: boolean, isSecondary?: boolean, onClick?: () => void, isGrey?: boolean, isSmall?: boolean, isFull?: boolean, isTrans?: boolean, isNot?: boolean, noti?: React.ReactNode, isImg?: boolean, img?: string, isPrimary?: boolean, title: string }) => {
  return (
    <div onClick={onClick} className={cx('ripple', styles.Chip, {
      [styles.Chip__primary]: isPrimary, [styles.Chip__trans]: isTrans,
      [styles.Chip__full]: isFull,
      [styles.Chip__pad]: isSmall,
      [styles.Chip__grey]: isGrey,
      [styles.Chip__secondary]: isSecondary,
      [styles.Chip__modal]: isModal,
      [styles.Chip__new]: isNew
    })}>
      {isNot && noti}
      {isImg && <img src={img} alt="Chip" />}
      {title}
      {isNotLeft && noti}
    </div>
  )
}

export default Chip
