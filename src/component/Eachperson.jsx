/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
const Eachperson = ({ list, handleClick1, onDelete }) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <div className="flex justify-center items-center mt-5  py-2 px-3 shadow-lg shadow-orange-600 rounded-full bg-orange-200">
        <img
          src={list.imgurl ? list.imgurl : "https://i.pravatar.cc/150?"}
          alt="friend_img"
          width={55}
          className="rounded-full object-cover shadow-lg shadow-black hover:scale-110 transition ease-in delay-75"
        />
        <div className="flex flex-col justify-center items-centre ml-4">
          <p className="text-lg font-Nunito font-semibold">{list.name}</p>
          {list.balance > 0 && (
            <p className="text-sm font-Nunito font-semibold text-green-800">
              {list.name} owes you $ {list.balance}.
            </p>
          )}
          {list.balance < 0 && (
            <p className="text-sm font-Nunito text-red-900 font-semibold">
              you owes {list.name} ${Math.abs(list.balance)}.
            </p>
          )}
          {list.balance === 0 && (
            <p className="text-sm font-Nunito font-semibold">
              you and {list.name} are even.
            </p>
          )}
        </div>
        <button
          onClick={() => handleClick1(list.name, list.id)}
          className="btnStyle"
        >
          Select
        </button>
      </div>
      <button onClick={() => onDelete(list.id)} className="">
        <MdDelete size={30} />
      </button>
    </div>
  );
};

export default Eachperson;
