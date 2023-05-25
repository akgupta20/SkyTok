import React, { useContext } from "react";

import LeftNavbarMenuItem from "./LeftNavbarMenuItem";
import { categories } from "./constants";
import { globalInfo } from "../context/AppContext";

const LeftNav = () => {
    const { mobileView } =
        useContext(globalInfo);


    return (
        <div
            className={`md:block w-[250px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
                mobileView ? "translate-x-0" : ""
            }`}
        >
            <div className="flex px-5 flex-col">
                {categories.map((item) => {
                    return (
                        <React.Fragment key={item.name}>
                            <LeftNavbarMenuItem
                                text={item.type === "home" ? "Home" : item.name}
                                icon={item.icon}
                            />
                            {item.divider && (
                                <hr className="my-5 border-white/[0.3]" />
                            )}
                        </React.Fragment>
                    );
                })}
                <hr className="my-5 border-white/[0.2]" />
            </div>
        </div>
    );
};

export default LeftNav;
