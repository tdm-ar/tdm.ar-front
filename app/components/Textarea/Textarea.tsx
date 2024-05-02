import type { ReactNode } from 'react';
import styles from './Textarea.module.css';

interface InputProps {
    text: string;
    placeholder: string;
    value: string;
    setValue(value: string): void;
}

export const Textarea = ({
    text,
    placeholder,
    value,
    setValue,
}: InputProps) => {
    return (
        <div className='w-[100%]'>
        <p className='text-lightBlue'>{text}</p>
        <textarea
            className='border border-lightBlue outline-0 bg-white w-full px-4 py-2 h-32 resize-none'
            placeholder={placeholder}
            value={value}
            // onChange={(e) => setValue(e.target.value)}
        />
    </div>
    );
};