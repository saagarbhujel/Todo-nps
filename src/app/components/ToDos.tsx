import React from "react";

type ToDosProps = {
  values: string[];
};

const ToDos = ({ values }: ToDosProps) => {
  return (
    <div>
      <ul className="flex flex-col gap-2 mt-4">
        {values &&
          values.map((value, index) => (
            <li
              className="bg-blue-300 w-[60vw] rounded-md px-2 py-2"
              key={index}
            >
              {value}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ToDos;
