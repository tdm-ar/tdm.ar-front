import type { ReactNode } from 'react';

interface InputProps {
    text: string;
    type: string;
    placeholder: string;
    value: string;
    setValue(value: string): void;
}

export const Input = ({
    text,
    type,
    placeholder,
    value,
    setValue,
}: InputProps) => {
    return (
        <div className='md:w-[48%] w-[100%]'>
            <p className='text-lightBlue'>{text}</p>
            <input
                type={type}
                className='border border-lightBlue outline-0 bg-white w-full px-4 py-2'
                placeholder={placeholder}
                value={value}
                // onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};