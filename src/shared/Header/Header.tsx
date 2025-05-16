import styles from "./Header.module.scss";
import Logo from "../../assets/logo.svg";
import MetaMask from "../../assets/metamask.png";
import Notificationicn from "../../assets/notification.png";
import Avatar from "../../assets/Avatar.png";
import { useEffect, useRef, useState } from "react";
import { MdJoinLeft } from "react-icons/md";
import cx from 'classnames';
const Header = () => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tabs = ['Pools', 'Position'];

  const [activeTab, setActiveTab] = useState('Pools');
  const [underlineStyle, setUnderlineStyle] = useState({});
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab === activeTab);
    const container = containerRef.current;
    if (container && container.children.length > 0) {
      const tabEl = container.children[activeIndex];
      setUnderlineStyle({
        width: tabEl.offsetWidth,
        left: tabEl.offsetLeft,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);
  return (
    <div className={styles.Header}>
      <div className={styles.Header__left}>
        <img src={Logo} alt="Logo" />
        <div className={styles.Header__tabs} ref={containerRef}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${styles.tab === activeTab ? styles.tab__active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <MdJoinLeft className={cx({
                [styles.greyColor]: activeTab !== tab,
                [styles.primaryColor]: activeTab == tab
              })} /> {tab}
            </button>
          ))}
          <span className={styles.Header__underline} style={underlineStyle}></span>
        </div>
      </div>
      <div className={styles.Header__right}>
        <img src={Notificationicn} alt="Notification" className={styles.Header__right__not} />
        <div className={styles.Header__right__box}>
          <img src={MetaMask} alt="Metamask" />
          0x48ce....ht56
        </div>
        <img src={Avatar} alt="Avatar" className={styles.Header__right__ava} />
      </div>
    </div>
  )
}

export default Header
