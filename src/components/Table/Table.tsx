import styles from "./Table.module.scss";
import cx from "classnames";
const Table = ({ headers, body, isLeft }: { isLeft?: boolean, headers: string[], body: string[][] }) => {
  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          {headers?.map((is: string, i: number) => <th className={cx({ [styles.alignLeft]: isLeft, [styles.paddingHeader]: isLeft })} key={i}>{is}</th>)}
        </tr>
      </thead>
      <tbody>
        {body.map((item, index) => {
          return (<tr key={index}>
            {item.map((it: string, ics: number) => {
              return <td className={cx({ [styles.alignLeft]: isLeft })} key={ics}>{it}</td>
            })}
          </tr>);
        })}
      </tbody>
    </table>
  )
}

export default Table
