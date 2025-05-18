import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
    return (
        <button 
            onClick={onClick}
            className={className}
            data-text={text}
        >
            <span>{text}</span>
            <span className="hover-text-header">{text}</span>
        </button>
    );
};

export default Button;