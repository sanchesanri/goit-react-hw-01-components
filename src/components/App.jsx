import { Profile } from './profile/Profile';
import { Statistics } from "./statistics/Statistics";
import { FriendList } from "./friendList/FriendList";
import { TransactionHistory } from "./transactionHistory/TransactionHistory";

import user from "data/user.json";
import data from "data/data.json";
import friends from "data/friends.json";
import transactions from "data/transactions.json";

export const App = () => {
  return (
    <div>
      My first HW React
      <Profile
        userName={user.username}
        userTag={user.tag}
        userLocation={user.location}
        userAvatar={user.avatar}
        userStats={user.stats}
      />

      <Statistics title="Upload stats" stats={data}/>

      <FriendList friends={friends}/>

      <TransactionHistory items={transactions}></TransactionHistory>
    </div>
  );
};
