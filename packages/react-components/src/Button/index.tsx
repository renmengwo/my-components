import React from 'react';

interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
    return <button>这是react的按钮</button>;
};

export default Button;
