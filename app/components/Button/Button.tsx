import type { ReactNode } from 'react';
import Image from "next/image";
import styles from './Button.module.css';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: 'main' | 'secondary' | 'tertiary';
    disabled?: boolean;
    className?: string;
}

export const Button = ({
    children,
    onClick,
    type = 'main',
    disabled,
    className
}: ButtonProps) => {
    const CLASSES = {
        main: styles.buttonMain,
        secondary: styles.buttonSecondary,
        tertiary: styles.buttonTertiary,
    };

    return (
        <button
            className={`${CLASSES[type]} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            <span>{children}</span>
            <div className={styles.icon}></div>
        </button>
    );
};