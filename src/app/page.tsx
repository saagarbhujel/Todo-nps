"use client";
import React, { useState } from "react";
import ToDos from "./components/ToDos";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

export default function Home() {
  const [todo, setTodo] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const debounce = (func: (value: string) => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return function (value: string) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(value);
      }, delay);
    };
  };

  const debouncedValue = debounce((value: string) => {
    console.log(value);
    setInputValue(value);
  }, 500);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedValue(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTodo((prevTodo) => [...prevTodo, inputValue]);
    setInputValue("");
    console.log(todo);
  };

  console.log(todo);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex gap-3 ">
        <Input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground "
          type="text"
          placeholder="Enter your todo"
          onChange={handleInput}
        />
        <Button
          onClick={handleSubmit}
          className="bg-blue-500 text-white h-10 w-20 rounded-md"
        >
          Submit
        </Button>
      </div>

      <div className="container mx-auto flex justify-center">
        <ToDos values={todo} />
      </div>
    </main>
  );
}
