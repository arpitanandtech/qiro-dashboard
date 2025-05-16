import Card from "../../../../components/Card/Card";
import Chip from "../../../../components/Chip/Chip"
import Title from "../../../../components/Title/Title";
import styles from "./Activity.module.scss";
import cx from 'classnames';
import { HIGHLIGHTS } from "./data";
import Table from "../../../../components/Table/Table";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import AdvanceTable from "../../../../components/AdvanceTable/AdvanceTable";
import { Wallet } from "./DummyComponent";
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from "@mui/x-charts";
import { useState } from "react";
import { PiCaretUpDown } from "react-icons/pi";
import { CiCircleInfo } from "react-icons/ci";
const Activity = () => {

  const barColors = [
    '#7052e7', '#7052e7', '#7052e7', '#7052e7', '#7052e7',
    '#7052e7', '#7052e7', '#7052e7', '#C8BAFF', '#C8BAFF', '#C8BAFF',
  ];

  const data = [
    { label: '14% APR', value: 14, color: '#C8BAFF' },      // slice 1: 14%
    { label: 'Rest', value: 86, color: '#7052e7' },     // slice 2: 86%
  ];

  const [active, setIsActive] = useState("Overview")

  const tabs = [
    'Overview',
    'Highlights',
    'Repayment',
    'Assets',
    'Structure',
    'Underwriters',
    'Pool Activity',
  ];

  return (
    <div className={styles.Activity}>
      <div className={styles.Activity__chips}>
        {tabs.map((tab) => (
          <Chip
            key={tab}
            title={tab}
            onClick={() => setIsActive(tab)}
            isPrimary={active === tab}
            isTrans={active !== tab}
          />
        ))}
      </div>
      <div className={styles.Activity__title}>
        <Title title="Overview" />
      </div>
      <div className={styles.Activity__overview}>
        <Card>
          <p>Pool Capacity <CiCircleInfo /></p>
          <span>$28,493,949</span>
          <div className={styles.Activity__overview__line}>
            <div className={styles.Activity__overview__line__first}>

            </div>
            <div className={styles.Activity__overview__line__sec}>

            </div>
            <div className={styles.Activity__overview__line__text}>
              80% filled
            </div>
          </div>
          <div className={styles.Activity__overview__estimation}>
            <div className={cx(styles.Activity__overview__estimation__box, styles.Activity__overview__estimation__box__bl)}>
              <p>Estimated APY <CiCircleInfo /></p>
              <span>14%</span>
            </div>
            <div className={styles.Activity__overview__estimation__box}>
              <p>Capital Formation <CiCircleInfo /></p>
              <span>30 Days</span>
            </div>
            <div className={cx(styles.Activity__overview__estimation__box, styles.Activity__overview__estimation__box__br)}>
              <p>Loan Term <CiCircleInfo /></p>
              <span>4 Days</span>
            </div>
          </div>
        </Card>
      </div>
      <div className={styles.Activity__hightitle}>
        <Title title="Highlights" />
        <div className={styles.Activity__highlights}>
          {HIGHLIGHTS.map((item, i) => {
            return (<div className={styles.Activity__highlights__box} key={i}>
              <Card isUp>
                <div className={styles.Activity__highlights__box__c}>
                  <img src={item.img} alt={item.title} />
                  <p>{item.title}</p>
                  <span>{item.subtitle}</span>
                </div>
              </Card>
            </div>);
          })}
        </div>
      </div>
      <div className={styles.Activity__repayments}>
        <Title title="Repayments" />
        <br />
        <div className={styles.Activity__repayments__graphtable}>
          <Card>
            <BarChart
              grid={{
                horizontal: true,
                vertical: false
              }}
              sx={{
                '& .MuiChartsAxis-line': {
                  stroke: '#eee', // axis line color
                },
                '& .MuiChartsAxis-tick': {
                  stroke: '#eee', // tick mark color
                },
                '& .MuiChartsGrid-line': {
                  stroke: '#eee', // grid line color
                },
              }}
              yAxis={[
                {
                  tickLabelStyle: {
                    color: '#eee',
                    fontSize: '0.6rem'
                  },
                }
              ]}
              hideLegend={true}
              borderRadius={10}
              colors={barColors}
              xAxis={[
                {
                  tickLabelStyle: {
                    color: '#eee',
                    fontSize: '0.6rem'
                  },
                  scaleType: 'band',
                  id: 'barCategories',
                  data: ['11 Jan', '26 Jan', '11 Feb', '26Feb', '11 Mar', '26 Mar', '11 Apr', '26 Apr', '11 May', '26 May', '11 Jun'],
                },
              ]}
              series={[
                {
                  data: [2, 5, 2, 4, 3, 2, 1, 2, 3, 2, 8],
                },
              ]}
              height={300}
              slotProps={{
                bar: {

                  style: {
                    borderTopLeftRadius: '0.5rem',
                    borderTopRightRadius: '0.5rem',
                    borderBottomLeftRadius: '0.5rem',
                    borderBottomRightRadius: '0.5rem',
                    overflow: 'visible',
                  }
                },
              }}
            />
            <div className={styles.Activity__repayments__table}>
              <Table
                headers={["Payments", "Due Date", "Amount", "Status"]}
                body={[
                  ['1', "1 Dec 2024", "$10,000", "Paid"],
                  ['2', "1 Jan 2025", "$10,000", "Paid"],
                  ['3', "1 Feb 2025", "-$10,000", "Pending"],
                  ['4', "1 Mar 2025", "$10,000", "Upcoming"],
                ]}
              />
            </div>
          </Card>
        </div>
      </div>
      <div className={styles.Activity__assets}>
        <Title title="Assets" />
        <br />
        <Card>
          <div className={styles.Activity__assets__box}>
            <div className={styles.Activity__assets__box__inner}>
              <p>Fintech Agency LLC</p>
              <span>Fintech Agency LLC Finance specialises in offering liquidity services tailored for Small
                and Medium Business (SMBs) with an annual revenue threshold of at least $50 million
              </span>
            </div>
            <div className={styles.Activity__overview__estimation}>
              <div className={cx(styles.Activity__overview__estimation__box, styles.Activity__overview__estimation__box__bl)}>
                <p>Assest Value</p>
                <span>$25M</span>
              </div>
              <div className={styles.Activity__overview__estimation__box}>
                <p>Asset Type</p>
                <span>Invoice</span>
              </div>
              <div className={cx(styles.Activity__overview__estimation__box, styles.Activity__overview__estimation__box__br)}>
                <p>Maturity Date</p>
                <span>Apr, 06 2025</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className={styles.Activity__structure}>
        <Title title="Structure" />
        <br />
        <Card>
          <div className={styles.Activity__structure__box}>
            <div className={styles.Activity__structure__box__first}>
              <PieChart
                height={250}
                width={250}
                series={[
                  {
                    data,
                    innerRadius: 80,

                  },
                ]}
                skipAnimation={false}
              />
              <p
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '40%',
                  transform: 'translate(-50%, -50%)',
                  fontWeight: 'bold',
                  fontSize: 24,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                14% APR
              </p>
            </div>
            <div className={styles.Activity__structure__box__second}>
              <div className={styles.Activity__structure__box__second__heads}>
                <div className={styles.Activity__structure__box__second__heads__header}>
                  <p><span></span>Senior Tranche Details</p>
                  <Chip isGrey title="Variable Yield" />
                </div>
                <div className={cx(styles.Activity__overview__estimation, styles.Activity__structure__box__second__heads__card)}>
                  <div className={cx(styles.Activity__overview__estimation__box, styles.Activity__overview__estimation__box__bl)}>
                    <p>Allocation</p>
                    <span>80%</span>
                  </div>
                  <div className={styles.Activity__overview__estimation__box}>
                    <p>APY</p>
                    <span>14%</span>
                  </div>
                  <div className={cx(styles.Activity__overview__estimation__box, styles.Activity__overview__estimation__box__br)}>
                    <p> TVL</p>
                    <span>336K USD</span>
                  </div>
                </div>
              </div>
              <br /> <br />
              <div className={styles.Activity__structure__box__second__heads}>
                <div className={styles.Activity__structure__box__second__heads__header}>
                  <p><span></span>Junior Tranche Details</p>
                  <Chip isGrey title="Variable Yield" />
                </div>
                <div className={cx(styles.Activity__overview__estimation, styles.Activity__structure__box__second__heads__card)}>
                  <div className={cx(styles.Activity__overview__estimation__box, styles.Activity__overview__estimation__box__bl)}>
                    <p>Allocation</p>
                    <span>20%</span>
                  </div>
                  <div className={styles.Activity__overview__estimation__box}>
                    <p>APY</p>
                    <span>19%</span>
                  </div>
                  <div className={cx(styles.Activity__overview__estimation__box, styles.Activity__overview__estimation__box__br)}>
                    <p>TVL</p>
                    <span>5M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className={styles.Activity__pool}>
        <Card>
          <Table
            isLeft
            headers={["Details", "Description", ""]}
            body={[
              ['Pool Type', "Senior Trache", ""],
              ['Investor Protections', "20-25% first-loss coverage", ""],
              ['Collateralization', "Yes, This loan is secured with real-world, off-chain assets as collateral", ""],
              ['Legal Documents', "Senior Pool Agreement", ""],
            ]}
          />
        </Card>
      </div>

      <div className={styles.Activity__underwriters}>
        <Title title="Underwriters" />
        <br />
        <Card>
          <div className={styles.Activity__underwriters__box}>
            <div className={styles.Activity__underwriters__box__headers}>
              <p>Qiro Underwriting Partners</p>
              <span>Powering Smarter Credit Decisions with Trusted Underwriting Partners</span>
            </div>
            <div className={styles.Activity__underwriters__box__buttons}>
              View Detailed Report <RxOpenInNewWindow />
            </div>

          </div>
          <div className={styles.Activity__overview__estimation}>
            <div className={cx(styles.Activity__overview__estimation__box, styles.Activity__overview__estimation__box__bl)}>
              <p>Risk Score <CiCircleInfo /></p>
              <span>8.9/10</span>
            </div>

            <div className={cx(styles.Activity__overview__estimation__box, styles.Activity__overview__estimation__box__br)}>
              <p>Default Probablity <CiCircleInfo /></p>
              <span>Low</span>
            </div>
          </div>
        </Card>
      </div>
      <div className={styles.Activity__poolActivity}>
        <Title title="Pool Activity" />
        <div className={styles.Activity__poolActivity__search}>
          <div className={styles.Activity__poolActivity__search__left}>
            <div className={styles.inputWrapper}>
              <span className={styles.inputWrapper__icon}><FiSearch /></span>
              <input type="text" placeholder="Search By Address..." />
            </div>
          </div>
          <div className={styles.Activity__poolActivity__search__right}>
            <p>Rows per page</p>
            <select>
              <option>15</option>
            </select>
            <p>1-1 of 1 wallet</p>
            <span><SlArrowLeft /></span>
            <span><SlArrowRight /></span>
          </div>
        </div>
        <br />
        <Card>
          <AdvanceTable
            headers={[<p className={styles.sort}>Wallet<PiCaretUpDown /></p>, <p className={styles.sort}>Tx Type<PiCaretUpDown /></p>, <p className={styles.sort}>Amount<PiCaretUpDown /></p>, <p className={styles.sort}>Date<PiCaretUpDown /></p>, ""]}
            body={[
              [<Wallet />, "Invest", "+$ 6.7k USDC", "5 Mar, 2025", <Chip title="Tx" isNotLeft noti={<RxOpenInNewWindow />} isPrimary isSecondary />],
              [<Wallet />, "Invest", "+$ 6.7k USDC", "5 Mar, 2025", <Chip title="Tx" isNotLeft noti={<RxOpenInNewWindow />} isPrimary isSecondary />],
              [<Wallet />, "Invest", "+$ 6.7k USDC", "5 Mar, 2025", <Chip title="Tx" isNotLeft noti={<RxOpenInNewWindow />} isPrimary isSecondary />],
              [<Wallet />, "Invest", "+$ 6.7k USDC", "5 Mar, 2025", <Chip title="Tx" isNotLeft noti={<RxOpenInNewWindow />} isPrimary isSecondary />]
            ]}
          />
        </Card>
      </div>
    </div>
  )
}

export default Activity
