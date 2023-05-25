import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../apis/api";

export const globalInfo = createContext();

const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(0);
  const [results, setResults] = useState([]);
  const [mobileView, setMobileView] = useState(false);

    useEffect(() => {
      fetchSelectedPageData(pageNo);    
    }, [pageNo]);
  
    const fetchSelectedPageData = () => {
      setLoading(true);
      fetchDataFromApi(`videos?page=${pageNo}`).then(({ data }) => {
        setLoading(true);
        const { posts } = data;
        setResults(posts);
        setLoading(false);
      });
    };

  return (
    <globalInfo.Provider
      value={{
        loading,
        setLoading,
        pageNo,
        setPageNo,
        results,
        setResults,
        mobileView,
        setMobileView,
      }}
    >
      {props.children}
    </globalInfo.Provider>
  );
};

export default AppContext;