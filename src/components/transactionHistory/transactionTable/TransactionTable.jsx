import css from "./TransactionTable.module.css";

export const TransactionTable = ({ type, amount, currency}) => {
    return <>
        <tr className={css.tableRow}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency }</td>
        </tr>
    </>
}