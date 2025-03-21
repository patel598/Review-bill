import React from 'react';
// import ArrowIcon from '../assets/arrow.svg'; 


interface Props {
    bgcolor?: string;
    text?: string;
    color?: string;
}

const ArrowIcon: React.FC<Props> = ({color = "currentColor"}) => {
    return (
        <svg
            className={`w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none cursor-pointer`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={color}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );
};




const DropdownComponent: React.FC<Props> = ({ bgcolor, text, color }) => {
    return (
        <div className={`relative min-w-[94px] ${bgcolor} rounded-lg`}>
            <select style={{color:color}} className={`appearance-none bg-transparent border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:outline-none`}>
                <option>{text}</option>
            </select>
            <ArrowIcon color={color} />
        </div>
    );
};

export default DropdownComponent;
