/* eslint-disable @typescript-eslint/no-explicit-any */

import { RxOpenInNewWindow } from "react-icons/rx";
import Tick from "../../assets/tick.svg";
import Chip from "../Chip/Chip";
import styles from "./Toast.module.scss";
import { useEffect } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

const Toast = ({ onClose, duration = 2000, activeTab }: { activeTab?: string, onClose?: any, duration?: number }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);
  const backdropStyle: any = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 999,
  };

  const toastWrapperStyle: any = {
    position: 'fixed',
    bottom: '5rem',
    right: '5rem',
    zIndex: 1000,
  };

  const toastStyle: any = {
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    width: '600px',
  };
  return (
    <>
      <div style={backdropStyle} onClick={onClose}></div>
      <div style={toastWrapperStyle}>
        <div style={toastStyle}>
          <div className={styles.Toast}>
            <div className={styles.Toast__left}>
              <div className={styles.Toast__left__icon}>
                <img src={Tick} alt="Tick" />
              </div>
              <div className={styles.Toast__left__content}>
                <div className={styles.Toast__left__title}>
                  {activeTab == "deposit" ? " Investment Successful" : 'Withdraw Successful'}
                </div>
                <div className={styles.Toast__left__subtitle}>
                  Your funds are successfully  {activeTab == "deposit" ? " deposit" : 'withdraw'} in the selected tranche.
                </div>
              </div>
            </div>

            <div className={styles.Toast__right}>
              <Chip isPrimary title="View Tx" isNotLeft noti={<RxOpenInNewWindow />} />
              <IoIosCloseCircleOutline />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toast;
