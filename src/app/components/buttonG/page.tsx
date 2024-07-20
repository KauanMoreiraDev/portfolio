import React from 'react';

interface ButtonProps {
    onClick: () => void;
    label: string;
    bgColor: string;
    // textColor: string;
    disabled?: boolean;
}

const Button = ({ onClick, label, bgColor, disabled }: ButtonProps)=> {
  return (
    <button
    onClick={onClick}
    className={`m-1 p-1 gap-1 rounded-3xl ${bgColor} `} >
        {label}
    </button>
  );
};

export default Button;