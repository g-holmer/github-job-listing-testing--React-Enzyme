import React from "react";
import styled from "styled-components";
export default function CompanyDetail({
  company_logo,
  title,
  type,
  location,
  company_url,
  url,
  description,
  how_to_apply,
}) {
  return (
    <Detail>
      <ImageWrap>
        <img src={company_logo} alt="" srcSet="" />
      </ImageWrap>
      <h2>{title}</h2>
      <p>
        Type: <strong className="strong-tag">{type}</strong>
      </p>
      <p>Location: {location}</p>
      <p>
        Company Website:{" "}
        <a href={company_url}>{company_url}</a>
      </p>
      <p>
        Advertisement Location: <a href={url}>{url}</a>
      </p>
      <h3>Description:</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: how_to_apply,
        }}
      />
    </Detail>
  );
}

const Detail = styled.div`
  background: #798fa8;
  padding: 2vw;
  margin: 10px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 7px 29px 0px;
`;
const ImageWrap = styled.div`
  margin: 20px 0 20px 0;
  width: 200px;
  height: 200px;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
