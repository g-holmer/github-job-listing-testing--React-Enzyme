import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function CompanyListItem({ id, companyName, companyLogo }) {
  return (
    <ListItem>
      <ImageWrap>
        <img src={companyLogo} alt="" srcSet="" />
      </ImageWrap>
      <LinkItem to={`/companies/${id}`}>
        <h2>{companyName}</h2>
      </LinkItem>
    </ListItem>
  );
}
const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 2vw;
`;
const ImageWrap = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const LinkItem = styled(Link)`
  max-width: 970px;
  text-decoration: none;
  color: black;
  &:hover {
    color: gold;
  }
`;
