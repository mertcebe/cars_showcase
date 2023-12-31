"use client";
import React from 'react'

const CustomButton = ({title, buttonType, containerStyles, handleClick}) => {
    return (
        <button
            disabled={false}
            type={buttonType?buttonType:'button'}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className='flex-1'>
                {title}
            </span>
        </button>
    )
}

export default CustomButton