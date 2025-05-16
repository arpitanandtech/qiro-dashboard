import styles from "./Activity.module.scss";
import MetaMask from "../../../../assets/metamask.png";

export const Wallet = () => (<div className={styles.Wallet}>
  <img src={MetaMask} alt="Meta" /><p>0x90eh...94we9</p>
</div>)