/* eslint-disable react/prop-types */

import Eachperson from "./Eachperson";
const Persons = ({ handleClick1, friendsList, onDelete }) => {
  return (
    <div className="flex flex-col justify-center items-center  rounded-lg p-3 mt-5">
      {friendsList.map((list) => (
        <Eachperson
          key={list.id}
          list={list}
          handleClick1={handleClick1}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Persons;
