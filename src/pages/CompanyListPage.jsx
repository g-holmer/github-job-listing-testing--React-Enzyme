import React, { useContext } from "react";
import { CompanyContext } from "../contexts/CompanyContext";

import styled from "styled-components";
import CompanyList from "../components/CompanyList/CompanyList";
import InputFormHandler from "../components/InputForm/InputFormHandler";

export default function CompanyListPage() {
  const { data, loading } = useContext(CompanyContext);

  return (
    <List>
      <h1 style={{ margin: "2vw" }}>Search Github Jobs - API</h1>
      <InputFormHandler />
      <CompanyList data={data} loading={loading} />
    </List>
  );
}
const List = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 7px 29px 0px;
  margin: 10px;
  border-radius: 8px;
  background: #798fa8;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  width: 60%;
  min-height: 100vh;
  align-self: center;
  h2 {
    font-size: 18px;
  }
`;
