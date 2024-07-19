import React from 'react';

interface ButtonProps {
    onClick: () => void;
    label: string;
    bgColor: string;
    // bgColorHover?: string;
    textColor: string;
    textColorHover?: string
    disabled?: boolean;
};

const ButtonG = ({ onClick, label, bgColor, textColor, disabled }: ButtonProps)=> {
  return (
    <button
    onClick={onClick}
    className={`m-1 p-1 gap-1 rounded-3xl ${bgColor} ${textColor}`} >
        {label}
    </button>
  );
};

export default ButtonG;