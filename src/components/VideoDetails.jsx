import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { AiFillHeart } from "react-icons/ai";

import { globalInfo } from '../context/AppContext';
import Suggestions from './Suggestions';

const VideoDetails = () => {

  const { results } = useContext(globalInfo);

  const { postId } = useParams();
  const target = results.filter((ele) => ele.postId === postId);
  const remaning = results.filter((ele) => ele.postId !== postId);
  const video = target[0];





  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-1 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[492px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">VideoDetails
            <ReactPlayer
              url={video?.submission?.mediaUrl}
              controls
              width="100%"
              height="96%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="text-white font-bold text-sm md:text-lg  ">
            {video?.submission?.title}
          </div>
          <div className="text-white font-bold text-sm md:text-sm  ">
            Description : {video?.submission?.description}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.creator?.pic}
                  />
                </div>
              </div>
              <div className="flex flex-col ml-3">
                <div className="text-white text-md font-semibold flex items-center">
                  {video?.creator?.name}
                </div>
              </div>
            </div>
            <div className="flex text-white mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiFillHeart className="text-xl text-[red] mr-2" />
                {`${video?.reaction?.count} Reactions`}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {remaning?.map((item,index) => {
            return (
              <Suggestions
                key={index}
                video={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default VideoDetails;