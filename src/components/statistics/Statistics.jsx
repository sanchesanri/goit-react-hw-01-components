import css from "./Statistics.module.css";
import { getRandomColor } from "../helpers/getRandomColor";


export const Statistics = ({ title, stats }) => {
    return <section className={css.statistics}>
        {title.length > 0 && <h2 className={css.title}>{title.toUpperCase()}</h2>}

        <ul className={css.statList}>
            {Array.isArray(stats) && stats.map(({ id, label, percentage }) =>
                <li key={id} className={css.item} style={{backgroundColor: getRandomColor()}}>
                    <span className={css.label}>{label}</span>
                    <span className="percentage">{percentage}%</span>
                </li>
            )}
        </ul>
    </section>
}

