import React from "react";

const LeftNavbarMenuItem = ({ text, icon }) => {
    return (
        <div title={text}
            className={
                `text-white text-sm cursor-pointer h-10 font-medium flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] ${text === 'Home' ? 'bg-white/[0.12]' : ' '} `
            } >
            <span className="text-2xl mr-5" >{icon}</span>
            {text}
        </div>
    );
};

export default LeftNavbarMenuItem;
