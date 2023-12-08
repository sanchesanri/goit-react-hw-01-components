import clsx from 'clsx'
import { AiFillRedditCircle } from "react-icons/ai";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({avatar, name, isOnline }) => {
    return <li
    className={css.item}>
    <span className={css.online}>
    <AiFillRedditCircle size={25} className={clsx({[css.icon]: isOnline})}/>
    </span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
</li>
}

