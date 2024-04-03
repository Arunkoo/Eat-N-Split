import { useState } from "react";
import "./App.css";
import Addperson from "./component/Addperson";
import Persons from "./component/Persons";
import SpiltBill from "./component/SpiltBill";
import { friendsArray } from "./data";

function App() {
  // state management  ...
  const [toggle1, settoggle1] = useState();
  const [friendList, setfriendList] = useState(friendsArray);
  const [name, setname] = useState(null);
  const [id, setid] = useState(null);

  // handle event ..
  const onAdd = (list) => {
    setfriendList((friendList) => [...friendList, list]);
  };

  const onDelete = (id) => {
    setfriendList((prevFriendList) =>
      prevFriendList.filter((friend) => friend.id !== id)
    );
  };

  const handleSplit = (value) => {
    setfriendList((friendList) =>
      friendList.map((friend) =>
        friend.id === id ? { ...friend, balance: value } : friend
      )
    );
  };

  const handleClick1 = (getname, getid) => {
    settoggle1((toggle1) => !toggle1);
    setname(getname);
    setid(getid);
  };

  return (
    <div className="flex  flex-col mt-3">
      <h1 className="text-3xl font-Nunito font-semibold text-center bg-orange-400 p-4">
        EAT N SPLIT😋
      </h1>
      <div className="flex justify-around items-center">
        <div className="flex flex-col">
          <Persons
            handleClick1={handleClick1}
            friendsList={friendList}
            onDelete={onDelete}
          />
          <Addperson onAdd={onAdd} />
        </div>
        <SpiltBill
          toggle1={toggle1}
          settoggle1={settoggle1}
          name={name}
          handleSplit={handleSplit}
        />
      </div>
      <p className="text-base font-Nunito text-center mt-32 font-semibold">
        Copyright @ArunKumar 2024
      </p>
    </div>
  );
}

export default App;
