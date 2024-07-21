import React from 'react';

interface ButtonProps {
    onClick: () => void;
    label: string;
    wSize: string;
    bgColor: string;
    textColor: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}

const Button = ({ onClick, label, bgColor, textColor, wSize, icon, disabled }: ButtonProps) => {
  return (
    <button
    onClick={onClick}
    disabled={false}
    className={`m-1 p-1 gap-1 rounded-3xl flex flex-row justify-center ${wSize} ${bgColor} ${textColor}`} >
        {label}
        {icon && <span className='ml-1 pt-1'>{icon}</span>}
    </button>
  );
};

export default Button;