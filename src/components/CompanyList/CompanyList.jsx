import React from "react";
import CompanyListItem from "./CompanyListItem";
export default function CompanyList({ data, loading }) {
  return (
    <>
      {!loading ? (
        <>
          {data && !data.length && (
            <p style={{ marginLeft: "2vw" }}>No jobs found.</p>
          )}
          {data &&
            data.map((company, index) => {
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
