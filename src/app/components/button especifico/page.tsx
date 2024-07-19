import React from 'react';

const Button = ({
    children,
    color = "primary",
    variant = "filled",
    size = "b",
    className = ""
}: {
    children: React.ReactNode;
    color?: 'primary' | 'blue';
    variant?: 'filled' | 'outline' | 'tinted' | 'plain';
    size?: 'a' | 'b'
    className?: string;
}) => {

    const defaultButtonClasses = "flex justify-center gap-2 px-2 py-1 text-md rounded-3xl font-medium focus:outline-none";

    const sizes = {
        a: 'w-1/12',
        b: 'w-2/12',
    };

    const variants = {
        'filled': {
            primary: 'border border-primary bg-primary text-white hover:bg-red-600',
            blue: 'border border-blue-500 bg-blue-500 text-white hover:bg-red-600',
        },
        'outline': {
            primary: 'border border-primary bg-transparent text-primary hover:bg-red-600',
            blue: 'border border-blue-500 bg-transparent text-blue-500 hover:bg-red-600',
        },
        'tinted': {
            primary: 'border border-primary-100 bg-primary-100 text-primary hover:border-primary-100 hover:bg-gray-100',
            blue: 'border border-blue-100 bg-blue-100 text-blue-500 hover:border-blue-100 hover:bg-gray-300',
        },
        'plain': {
            primary: 'border border-transparent bg-transparent text-primary hover:text-white',
            blue: 'border border-transparent bg-transparent text-blue-500 hover:text-white',
        }
    };

    const combineClasses = (...classes: string[]) => {
        return classes.filter(Boolean).join(' ');
    };

    return (
        <button className={combineClasses(defaultButtonClasses, variants[variant][color], sizes[size], className)}>
            {children}
        </button>
    );
};

export default Button;
