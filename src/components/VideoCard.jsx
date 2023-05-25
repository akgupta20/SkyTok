import React, {useContext} from 'react'
import { Link } from "react-router-dom";

import { globalInfo } from '../context/AppContext';


const VideoCard = ({video}) => {


  const { pageNo } = useContext(globalInfo);

  return (
    <Link to={`/videos/${video.postId}`}>
            <div className="flex flex-col mb-8">
                <div className="relative h-90 w-30 md:h-90 md:w-50 md:rounded-xl overflow-hidden">
                    <img
                        className="h-full w-full object-cover"
                        src={video?.submission?.thumbnail}
                    />
                </div>
                <div className="flex text-white mt-3">
                    <div className="flex items-start">
                        <div className="flex h-9 w-9 mt-2 rounded-full overflow-hidden">
                            <img
                                className="h-full w-full object-cover"
                                src={video?.creator?.pic}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col ml-3 overflow-hidden">
                        <span className="text-[14px] font-bold line-clamp-2">
                            {video?.submission?.title}
                        </span>
                        <span className="text-[12px] font-semibold  text-white/[0.7] flex items-center">
                            {video?.creator?.name}
                        </span>
                        <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
                          <span>{`${video?.reaction?.count} Reactions`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
  )
}

export default VideoCard;