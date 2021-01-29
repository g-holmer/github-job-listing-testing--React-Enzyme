import React from "react";
import CompanyListItem from "./CompanyListItem";
export default function CompanyList({ data, loading, checkContext, searches }) {
  let renderData = null;
  const lastItem = searches && searches.slice(-1).pop();

  if (checkContext) {
    renderData = data.filter((item) => {
      return item.description
        .toLowerCase()
        .includes(lastItem && lastItem.name.toLowerCase());
    });
  } else {
    renderData = data;
  }
  console.log(renderData);
  return (
    <>
      {!loading ? (
        <>
          {renderData && !renderData.length && (
            <p style={{ marginLeft: "2vw" }}>No jobs found.</p>
          )}
          {renderData &&
            renderData.map((company, index) => {
              return (
                <CompanyListItem
                  key={index}
                  id={company.id}
                  companyName={company.title}
                  companyLogo={company.company_logo}
                />
              );
            })}
        </>
      ) : (
        <p style={{ marginLeft: "2vw" }}>Loading...</p>
      )}
    </>
  );
}
