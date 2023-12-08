
import css from "./TransactionHistory.module.css";
import { TransactionTable } from "./transactionTable/TransactionTable";



export const TransactionHistory = ({ items }) => {
    return <table className={css["transaction-history"]}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => {
                return <TransactionTable
                    key={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                />
            })}
        </tbody>
    </table>
}