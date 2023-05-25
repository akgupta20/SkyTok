import React from "react";

import {  RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater,MdHomeFilled, MdOutlineMovieCreation } from 'react-icons/md'; 
import { VscHistory } from 'react-icons/vsc';
import { HiDownload } from 'react-icons/hi';
import { BiLike } from 'react-icons/bi';
import { CgPlayList } from 'react-icons/cg';
import { BsFire } from 'react-icons/bs';
import { BiShoppingBag } from 'react-icons/bi';
import { IoMusicalNoteOutline,IoNewspaperOutline} from 'react-icons/io5';
import { FiRadio} from 'react-icons/fi';
import { SiYoutubegaming} from 'react-icons/si';
import { AiOutlineTrophy,AiOutlineBulb} from 'react-icons/ai';
import { GiHanger} from 'react-icons/gi';
import { RiFlagLine} from 'react-icons/ri';


export const categories = [
    { name: "Home", icon: <MdHomeFilled />, type: "home" },
    { name: "Subscriptions", icon: <MdOutlineSubscriptions />,divider:true, type: "subscriptions" },
    
    { name: "Library", icon: <MdOutlineVideoLibrary />, type: "library" },

    { name: "History", icon: <VscHistory />, type: "history" },
    { name: "Watch later", icon: <MdOutlineWatchLater/>, type: "watch-later" },
    { name: "Downloads", icon: <HiDownload/>, type: "downloads" },
    { name: "Playlist", icon: <CgPlayList/>, type: "playlist" },
    { name: "Liked Videos", icon: <BiLike/>, type: "liked_videos", divider:true },


    { name: "Trending", icon: <BsFire />, type: "category" },
    { name: "Shoping", icon: <BiShoppingBag />, type: "shoping" },
    { name: "Music", icon: <IoMusicalNoteOutline />, type: "category" },
    { name: "Movies", icon: <MdOutlineMovieCreation />, type: "category" },
    { name: "Live", icon: <FiRadio />, type: "category" },
    { name: "Gaming", icon: <SiYoutubegaming />, type: "category" },
    { name: "News", icon: <IoNewspaperOutline />, type: "category" },
    { name: "Sports", icon: <AiOutlineTrophy />, type: "category" },
    { name: "Learning", icon: <AiOutlineBulb />, type: "category" },
    {
        name: "Fashion & beauty",
        icon: <GiHanger />,
        type: "category",
        divider: true,
    },
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <RiFlagLine />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];
