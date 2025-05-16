import styles from "./Hero.module.scss";
import Arrow from "../../../../assets/arrow.png";
import Chip from "../../../../components/Chip/Chip";
import { TbWorld } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RxOpenInNewWindow } from "react-icons/rx";
const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.Hero__content}>
        <div className={styles.Hero__content__left}>
          <img src={Arrow} alt="Arrow" className={styles.Hero__content__arrow} />
          <p className={styles.Hero__content__stitle}>Featured Loan</p>
          <h1 className={styles.Hero__content__title}>Fintech Agency LLC <span>Contract <RxOpenInNewWindow /></span></h1>
          <span className={styles.Hero__content__ptitle}>Helo Finance specialises in offering liquidity services tailored for Small and Medium Businesses SMBs with an annual revenue threshold of at least $50 MILLION.</span>
          <div className={styles.Hero__content__boxes}>
            <div className={styles.Hero__content__boxes__box}>
              <p>
                Estimated APY
              </p>
              <span>14%</span>
            </div>
            <div className={styles.Hero__content__boxes__box}>
              <p>
                Minimum Investment
              </p>
              <span>$100K</span>
            </div>
            <div className={styles.Hero__content__boxes__box}>
              <p>
                Total Value Locked
              </p>
              <span>$5M</span>
            </div>
          </div>
        </div>
        <div className={styles.Hero__content__right}>
          <div className={styles.Hero__content__social}>
            <Chip isNot noti={<TbWorld />} title="Website" />
            <Chip isNot noti={<FaLinkedin />} title="Linkedin" />
            <Chip isNot noti={<FaXTwitter />} title="Twitter" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
