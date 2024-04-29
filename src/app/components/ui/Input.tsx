"use client";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ type, className, ...props }: InputProps) => {
  return (
    <div>
      <input type={type} className={className} {...props} />
    </div>
  );
};

export default Input;
