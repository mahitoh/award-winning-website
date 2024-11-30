import React from 'react';

const Button = ({title, id, leftIcon, rightIcon, containerClass}) => {
    return (
        <div>
            <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}` }>
                {rightIcon }
                <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
                    <div>{title}</div>
                </span>
                {leftIcon }
            </button>
        </div>
    );
};

export default Button;