import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { withRouter } from "react-router-dom";
export const CompanyContext = createContext({});

function CompanyContextProvider({ children, history }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searches, setSearches] = useState([]);
  const [checkContext, setCheckContext] = useState(false);
  const [url, setUrl] = useState("");
  async function fetchData() {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }

  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });
    if (url === "") return;
    setLoading(true);
    fetchData();
    // eslint-disable-next-line
  }, [url]);

  return (
    <CompanyContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        url,
        setUrl,
        searches,
        setSearches,
        checkContext,
        setCheckContext,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}
export default withRouter(CompanyContextProvider);
