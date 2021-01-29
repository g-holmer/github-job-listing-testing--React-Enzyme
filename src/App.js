import React from "react";
import CompanyListPage from "./pages/CompanyListPage";
import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import CompanyDetailPage from "./pages/CompanyDetailPage";
function App() {
  return (
    <Wrapper>
      <LinkItem to="/companies">List</LinkItem>
      <Switch>
        <Route path="/companies" exact component={CompanyListPage} />
        <Route path="/companies/:id" exact component={CompanyDetailPage} />
      </Switch>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #127993;
  min-height: 100vh;
`;
const LinkItem = styled(Link)`
  align-self: center;
  font-size: 24px;
  text-decoration: none;
  color: black;
  &:hover {
    color: gold;
  }
`;
export default App;
