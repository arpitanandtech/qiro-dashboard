import Button from "../../../../components/Button/Button";
import Card from "../../../../components/Card/Card";
import Chip from "../../../../components/Chip/Chip";
import styles from "./Transaction.module.scss";
import cx from 'classnames';
import MetaMask from "../../../../assets/metamask.png";
import Rupee from "../../../../assets/rupee.svg";
import { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import Title from "../../../../components/Title/Title";
import { IoCloseCircleOutline, IoCopyOutline } from "react-icons/io5";
import Toast from "../../../../components/Toast/Toast";
import { RxOpenInNewWindow } from "react-icons/rx";
const Transaction = () => {

  const [activeTab, setActiveTab] = useState('deposit');

  const [input, setInput] = useState("100.0");

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = useState(false);

  const handleOpen1 = () => setOpen1(true);

  const handleClose1 = () => setOpen1(false);

  const [changebg, setChangeBg] = useState(false);

  const [open2, setOpen2] = useState(false);

  const handleOpen2 = () => setOpen2(true);

  const handleClose2 = () => setOpen2(false);

  useEffect(() => {
    if (open1) {
      setTimeout(() => setChangeBg(true), 500);
      setTimeout(() => {
        handleClose1();
        handleOpen2();
        handleClose2();
        showToast();
      }, 2000);
    }
  }, [open1])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: '1.5rem',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    background: 'linear-gradient(to right, #FFFFFF 0%, #F5F2FE 25%, #ECE5FF 50%, #F0ECFE 75%, #FFFFFF 100%)',
    boxShadow: 24,
    width: '90vw',            // Responsive width
    maxWidth: 400,            // Limit on large screens
    maxHeight: '90vh',        // Prevent from going off screen
    overflowY: 'auto',
  };

  const [toast, setToast] = useState("");

  const showToast = () => {
    setToast('This is a basic toast!');
  };

  return (
    <div className={styles.Transaction}>
      <div className={styles.Transaction__chips}>
        <Chip onClick={() => setActiveTab("deposit")} isFull isPrimary={activeTab === "deposit"} isTrans={activeTab === "withdraw"} title="Deposit" />
        <Chip isPrimary={activeTab === "withdraw"} isTrans={activeTab === "deposit"} onClick={() => setActiveTab("withdraw")} isFull title="Withdraw" />
      </div>
      <div className={styles.Transaction__deposit}>
        <Card>
          <div className={styles.Transaction__deposit__title}>
            <p>{activeTab == "deposit" ? 'Deposit USDC' : 'Withdraw USDC'}</p>
            <img src={Rupee} alt="Rupee" />
          </div>
          <div className={styles.Transaction__deposit__input}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="$0.00" />
          </div>
          <div className={styles.Transaction__deposit__footer}>
            <p>${input}</p>
            <div className={styles.Transaction__deposit__footer__right}>
              <p>{input} USDC</p>
              <Chip isSmall title="MAX" isPrimary isSecondary />
            </div>
          </div>
        </Card>
      </div>
      <div className={styles.Transaction__min}>
        <Card>
          <div className={cx(styles.Transaction__min__box, styles.mb10)}>
            <span>Minimum Investments</span>
            <p>{input}K</p>
          </div>
          <div className={cx(styles.Transaction__min__box, styles.mb10)}>
            <span>Lockup Period</span>
            <p>28 Days</p>
          </div>
          <div className={styles.Transaction__min__box}>
            <span>APY</span>
            <p>7.87%</p>
          </div>
        </Card>
      </div>
      <div className={styles.Transaction__btn}>
        <Button onClick={handleOpen} disabled={input == "0.0"} title="Submit an amount" />
      </div>
      <p className={styles.Transaction__subtitle}>My Activity</p>
      <div className={styles.Transaction__acc}>
        <Card>
          <div className={styles.Transaction__acc__box}>
            <div className={styles.Transaction__acc__box__header}>
              <p><img src={MetaMask} alt="" /> 0x9102...e3e7</p>
              <p>$-69.33 USDC</p>
            </div>
            <div className={styles.Transaction__acc__box__footer}>
              <p>Invested</p>
              <p>Mar 1, 2025</p>
            </div>
          </div>
        </Card>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.Modal__header}>
            <Title title={activeTab == "deposit" ? "Review Deposit" : "Review WithDraw"} />
            <IoCloseCircleOutline onClick={handleClose} />
          </div>
          <div className={styles.Modal__Body}>
            <Card noPadding>
              <p className={styles.Modal__Body__title}><span></span>Fintech Agency LLC</p>
              <p className={styles.Modal__Body__stitle}>{activeTab == "deposit" ? "Deposit" : "Withdraw"}</p>
              <div className={styles.Modal__Body__money}>
                <p>100 USDC<Chip title="$100" isGrey /></p>
                <img src={Rupee} alt="Rupee" />
              </div>
              <div className={styles.Modal__Body__tra}>
                <p>Tranche</p>
                <span>Senior Tranche</span>
              </div>
              <div className={styles.Modal__Body__tra}>
                <p>Rate(USDC)</p>
                <span>1 USDC = 1.078475 QSR</span>
              </div>
            </Card>
            <p className={styles.Modal__Body__agree}>By Confirming this transaction, you agree to the <span>Terms of Use</span> and the services provisions relating to the morpho Vault.</p>
            <Button onClick={() => {
              handleClose();
              setTimeout(() => handleOpen1(), 500);
            }} smallHeight title="Continue to Confirm" />
          </div>
        </Box>
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title1"
        aria-describedby="modal-modal-description1"
      >
        <Box sx={style}>
          <div className={styles.Modal__header}>
            <Title title="Confirm" />
            <IoCloseCircleOutline onClick={handleClose1} />
          </div>
          <div className={styles.Modal__Body}>
            <Card noPadding>
              <p className={styles.Modal__Body__title}><span></span>Fintech Agency LLC</p>
              <p className={styles.Modal__Body__stitle}>Deposit</p>
              <div className={cx(styles.Modal__Body__money, styles.noBorder)}>
                <p>100 USDC<Chip title="$100" isGrey /></p>
                <img src={Rupee} alt="Rupee" />
              </div>
            </Card>
            <p className={styles.Modal__Body__agree}>Approve {activeTab == "deposit" ? "deposit" : "withdraw"} of 100 USDC</p>
            <div className={styles.Modal__Body__completion}>
              <span>

              </span>
              <span>
                <div className={cx({ [styles.bgColor]: changebg })}></div>
              </span>
            </div>
            {!changebg ? <p className={styles.Modal__Body__agree}>Signature 1/2 - Proceed in your wallet</p>
              : <p className={styles.Modal__Body__agree}>Signature 2/2 - Proceed in your wallet</p>}
          </div>
        </Box>
      </Modal>
      {/* Investment SuccessFul */}

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title2"
        aria-describedby="modal-modal-description2"
      >
        <Box sx={style}>
          <div className={styles.Modal__header}>
            <Title title={activeTab == "deposit" ? "Investment Sucessful" : "Withdraw Successful"} />
            <IoCloseCircleOutline onClick={handleClose2} />
          </div>
          <div className={styles.Modal__Body}>
            <Card noPadding>
              <p className={styles.Modal__Body__title}><span></span>Fintech Agency LLC</p>
              <p className={styles.Modal__Body__stitle}>Deposit</p>
              <div className={cx(styles.Modal__Body__money, styles.noBorder)}>
                <p>100 USDC<Chip title="$100" isGrey /></p>
                <img src={Rupee} alt="Rupee" />
              </div>
              <div className={styles.Modal__Body__tra}>
                <p>Gas Fees</p>
                <span>0.1%</span>
              </div>
              <div className={styles.Modal__Body__tra}>
                <p>Tx Hash</p>
                <span>0x48buy8c9e04u<RxOpenInNewWindow /><IoCopyOutline /></span>
              </div>
            </Card>

          </div>
        </Box>
      </Modal>
      {toast && <Toast activeTab={activeTab} onClose={() => setToast("")} />}
    </div>
  )
}

export default Transaction