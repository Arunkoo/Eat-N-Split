import { useState } from "react";

/* eslint-disable react/prop-types */
const SpiltBill = ({ toggle1, settoggle1, name, handleSplit }) => {
  // state management for controlled element.
  const [totalbill, settotalbill] = useState("");
  const [expense, setexpense] = useState("");

  const [whoPaying, setwhoPaying] = useState("");
  const friendExpense = totalbill - expense;

  // logics for calculating bill..
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!totalbill || !expense) return;

    let newBalance;
    if (whoPaying === name) {
      newBalance = -friendExpense;
    } else {
      newBalance = totalbill - expense;
    }

    handleSplit(newBalance);
    settoggle1(!toggle1);
    settotalbill("");
    setexpense("");

    setwhoPaying("");
  };

  return (
    <>
      {toggle1 && (
        <form
          onSubmit={handleSubmit}
          className="bg-orange-200 flex flex-col gap-3 p-5 rounded-2xl shadow-2xl shadow-orange-600 w-[500px] mt-6"
        >
          <h1 className="text-3xl font-Nunito font-semibold text-nowrap text-center">
            Split A Bill With <span className="text-orange-600">{name}</span>
          </h1>
          <div className="formSpace mt-3">
            <label className="formLabel">Total bill</label>
            <input
              placeholder=" Whats is the total bill?"
              className="formInput"
              type="text"
              value={totalbill}
              onChange={(e) => settotalbill(Number(e.target.value))}
            />
          </div>
          <div className="formSpace">
            <label className="formLabel">Your Expense</label>
            <input
              value={expense}
              onChange={(e) => setexpense(Number(e.target.value))}
              className="formInput"
              type="text"
            />
          </div>
          <div className="formSpace">
            <label className="formLabel">{name} Expense</label>
            <p className="forminput">{friendExpense}</p>
          </div>
          <div className="formSpace">
            <p className="formLabel">Who is paying the bill?</p>
            <select
              value={whoPaying}
              onChange={(e) => setwhoPaying(e.target.value)}
              className="formInput"
            >
              <option>You</option>
              <option>{name}</option>
            </select>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="bg-orange-500 w-[35%] shadow-xl shadow-orange-900  text-base font-Nunito  px-3 py-1 rounded-full font-semibold focus:outline-none focus:ring focus:ring-orange-500 hover:bg-orange-600 focus:ring-offset-1 ">
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default SpiltBill;
