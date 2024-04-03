/* eslint-disable react/prop-types */
import { useState } from "react";
const Addperson = ({ onAdd }) => {
  // state for toggle UI..
  const [toggle, settoggle] = useState(false);
  const [name, setname1] = useState("");
  const [imgUrl, setimgUrl] = useState("https://i.pravatar.cc/150");

  // event handling...
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !imgUrl) return;
    const id = Math.floor(Math.random() * 100 + 1);

    const newFriends = {
      name,
      imgUrl: `${imgUrl}? img=${id}`,
      balance: 0,
      id,
    };
    onAdd(newFriends);
    // console.log(newFriends);
    setname1("");
    setimgUrl("https://i.pravatar.cc/150");
    settoggle(false);
  };

  const handleClick = () => {
    settoggle((toggle) => !toggle);
  };

  return (
    <div className="flex flex-col mt-4 justify-center items-center">
      {!toggle && (
        <button
          onClick={handleClick}
          className="bg-orange-500   shadow-xl shadow-orange-900  text-base font-Nunito  px-3 py-1 rounded-full font-semibold focus:outline-none focus:ring focus:ring-orange-500 hover:bg-orange-600 focus:ring-offset-1 text-nowrap"
        >
          Add Friend
        </button>
      )}

      {toggle && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  mt-5 bg-orange-200 p-5 w-[350px] gap-3 rounded-xl shadow-lg shadow-orange-600"
        >
          <div className="formSpace">
            <label className="formLabel">Friend Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setname1(e.target.value)}
              className="rounded-xl p-1 shadow-lg"
            />
          </div>
          <div className="formSpace">
            <label className="text-lg font-Nunito font-semibold">
              Image Url
            </label>
            <input
              type="url"
              value={imgUrl}
              onChange={(e) => setimgUrl(e.target.value)}
              placeholder="   Type you url here"
              className="formInput"
            />
          </div>
          <div className="mt-4">
            <button className="bg-orange-500 w-full shadow-xl shadow-orange-900  text-base font-Nunito  px-3 py-1 rounded-full font-semibold focus:outline-none focus:ring focus:ring-orange-500 hover:bg-orange-600 focus:ring-offset-1 ">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Addperson;
