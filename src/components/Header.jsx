import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import YT from "../images/YT.png";

import { SlMenu } from "react-icons/sl";
import { TbPlayerTrackNextFilled , TbPlayerTrackPrevFilled } from "react-icons/tb";

import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { globalInfo } from "../context/AppContext";
import Loader from "../shared/loader";

const Header = () => {

    const { mobileView, setMobileView, pageNo, setPageNo ,loading} = useContext(globalInfo);
    const navigate = useNavigate();

    const mobileViewToggle = () => {
        setMobileView(!mobileView);
        
    };
    
    const nextPageHandler = () => {
        if(pageNo!=9)
        setPageNo(pageNo + 1);
        navigate('/');
    }
    const prePageHandler = () => {
        if(pageNo!=0)
        setPageNo(pageNo - 1);
        navigate('/');
    }



    return (
        <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5  bg-white dark:bg-black">
           {loading && <Loader />}

            <div className="flex h-5 items-center">
                { (
                    <div
                        className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-4 rounded-full hover:bg-[#303030]/[0.6]"
                        onClick={mobileViewToggle}
                    >
                        {mobileView ? (
                            <CgClose className="text-white text-xl" />
                        ) : (
                            <SlMenu className="text-white text-xl" />
                        )}
                    </div>
                )}
                <Link to="/" className="flex h-5 items-center">
                    <img
                        className="h-full hidden dark:md:block"
                        src={YT}
                        alt="Youtube"
                    />
                </Link>
            </div>
            <div className="group flex items-center">
            <button className="w-[80px] md:w-[150px] h-8 md:h-10 mr-8 flex items-center justify-center border border-l-0 border-[#303030] rounded-3xl xs:mr-0 bg-white/[0.1] focus-within:border-blue-500"
                    onClick={prePageHandler}>
                    <div  className="text-white text-md"> <TbPlayerTrackPrevFilled/> </div>
                    <span>' '</span>
                    <span className="text-white text-sm">Previous Page</span>
                    
                </button>

                <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                    <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                        <IoIosSearch className="text-white text-xl" />
                    </div>
                    <input
                        type="text"
                        className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px] font-medium"
                        placeholder="Developed by Akash Gupta"
                        disabled
                    />
                </div>
                <button
                    className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"                >
                    <IoIosSearch className="text-white text-xl" />
                </button>
                <button className="w-[80px] md:w-[150px] h-8 md:h-10 ml-12 flex items-center justify-center border border-l-0 border-[#303030] rounded-3xl bg-white/[0.1] focus-within:border-blue-500"
                onClick={nextPageHandler}>
                    <span className="text-white text-sm">Next Page </span> 
                    <span>' '</span>
                    <div  className="text-white text-md"> <TbPlayerTrackNextFilled/> </div>
                </button>
            </div>
            <div className="flex items-center">
                <div className="hidden md:flex">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <RiVideoAddLine className="text-white text-xl cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <FiBell className="text-white text-xl cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
