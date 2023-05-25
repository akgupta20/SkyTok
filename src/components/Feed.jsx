import React, { useContext, useEffect } from 'react';
import LeftNavbar from "./LeftNavbar";
import VideoCard from "./VideoCard";

import { globalInfo } from '../context/AppContext';

const Feed = () => {

    const { loading, results } = useContext(globalInfo);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
    }, []);

    return (
        <div className="flex flex-row h-[calc(100%-56px)]">
            <LeftNavbar />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-5">
                    {!loading &&
                        results.map((item) => {
                            return (
                                <VideoCard
                                    key={item?.postId}
                                    video={item}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Feed;