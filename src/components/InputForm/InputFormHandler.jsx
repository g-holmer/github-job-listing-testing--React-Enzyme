import React, { useContext } from "react";
import { CompanyContext } from "../../contexts/CompanyContext";
import styled from "styled-components";
export default function InputFormHandler() {
  const { setUrl } = useContext(CompanyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputSearch = e.target[0] && e.target[0].value;
    const finishedInput = inputSearch.replaceAll(" ", "+");

    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${finishedInput}`;
    setUrl(url);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search" />
      <input type="submit" value="Submit" />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  margin: 2vw;
  flex-wrap: wrap;
  input {
    border: 0.5px solid gray;
    width: 44vw;
    max-width: 400px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
  input[type="submit"] {
    background: #3b3d4b;
    color: #ebebeb;
    cursor: pointer;
    border-radius: 0 10px 10px 0;
    width: inherit;

    align-self: center;
    &:hover {
      background: #4e4e4e;
    }
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 680px) {
    input[type="submit"] {
      border-radius: 10px 10px 10px 10px;
    }
  }
`;
