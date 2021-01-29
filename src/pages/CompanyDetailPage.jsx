import React, { useContext, useEffect, useState } from "react";
import { CompanyContext } from "../contexts/CompanyContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CompanyDetail from "../components/CompanyDetail/CompanyDetail";
export default function CompanyDetailPage({ match }) {
  const { data } = useContext(CompanyContext);
  const [detailData, setDetailData] = useState(null);
  const id = match.params.id;
  const findId = data && data.find((item) => item.id === id);

  useEffect(() => {
    fetch(
      `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDetailData(data);
      });
    // eslint-disable-next-line
  }, []);

  let renderData = null;
  if (data) {
    renderData = findId;
  } else {
    renderData = detailData && detailData;
  }

  return (
    <>
      {renderData && (
        <DetailPage>
          <LinkItem to="/companies">{"<<"}Back</LinkItem>
          <CompanyDetail
            company_logo={renderData.company_logo}
            title={renderData.title}
            type={renderData.type}
            location={renderData.location}
            company_url={renderData.company_url}
            url={renderData.url}
            description={renderData.description}
            how_to_apply={renderData.how_to_apply}
          />
        </DetailPage>
      )}
    </>
  );
}

const LinkItem = styled(Link)`
  font-size: 30px;
  max-width: min-content;
  color: black;
  text-decoration: none;
`;
const DetailPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: center;
  width: 70%;
  min-height: 100vh;
`;
