import React, { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";

type ToDosProps = {
  values: string[];
  setTodo: React.Dispatch<React.SetStateAction<string[]>>;
};

const ToDos = ({ values, setTodo }: ToDosProps) => {
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [handlEdit, setHandleEdit] = useState<string>("");

  const handleDelete = (index: number) => {
    const newTodo = values.filter((_, i: number) => i !== index);
    setTodo(newTodo);
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setHandleEdit(values[index]);
  };

  const handleUpdate = () => {
    const updatedTodo = [...values];
    updatedTodo[editIndex] = handlEdit;
    setTodo(updatedTodo);
    setEditIndex(-1);
    setHandleEdit("");
  };
  return (
    <div>
      <div className="flex flex-col gap-2 mt-4">
        {values &&
          values.map((value, index) => (
            <div
              className="bg-blue-300 w-[60vw] h-12 rounded-md px-2 py-2 flex justify-between items-center group"
              key={index}
            >
              {editIndex === index ? (
                <Input
                  type="text"
                  value={handlEdit}
                  onChange={(e) => setHandleEdit(e.target.value)}
                />
              ) : (
                value
              )}
              <div className=" gap-2 hidden group-hover:flex">
                {editIndex === index ? (
                  <Button
                    onClick={handleUpdate}
                    className="bg-purple-500 hover:bg-purple-400 text-white h-8 w-full px-4 rounded-md "
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleEdit(index)}
                    className="bg-purple-500 hover:bg-purple-400 text-white h-8 w-full px-4 rounded-md "
                  >
                    Edit
                  </Button>
                )}
                <Button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 hover:bg-red-500/80 h-8 w-full px-2 rounded-md "
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ToDos;
