import css from './Profile.module.css';

export const Profile = ({userName,userTag,userLocation, userAvatar,userStats:{followers, likes, views}}) => {
  
 return <>
  <div className={css.profile}>
  <div className={css.description}>
    <img
      src={userAvatar}
      alt={userTag}
      className={css.avatar}
    />
    <p className={`${css.text} ${css.name}`}>{userName}</p>
    <p className={`${css.text} tag`}>{userTag}</p>
    <p className={`${css.text} location`}>{userLocation}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.item}>
      <span className="label">Followers</span>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li className={css.item}>
      <span className="label">Views</span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li className={css.item}>
      <span className="label">Likes</span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>
</>
};
