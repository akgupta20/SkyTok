import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Suggestions = ({ video }) => {
    return (
        <Link to={`/videos/${video.postId}`}>
            <div className="flex mb-3">
                <div className="relative h-24 lg:h-20 xl:h-60 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[120] rounded-xl bg-slate-800 overflow-hidden">
                    <img
                        className="h-full w-full object-cover"
                        src={video?.submission?.thumbnail}
                    />
                </div>
                <div className="flex flex-col ml-3 overflow-hidden">
                    <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-white">
                    {video?.submission?.title}
                    </span>
                    <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                    {video?.creator?.name}
                    </span>
                    <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
                        <span>{`${video?.reaction?.count} views`}</span>
                        
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Suggestions;
