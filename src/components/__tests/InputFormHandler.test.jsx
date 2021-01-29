import React from "react";
import Enzyme, { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import InputFormHandler from "../InputForm/InputFormHandler";
import CompanyContextProvider from "../../contexts/CompanyContext";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("Test InputFormHandler component", () => {
  let wrapper;
  wrapper = mount(
    <BrowserRouter>
      <CompanyContextProvider>
        <InputFormHandler />
      </CompanyContextProvider>
    </BrowserRouter>
  );

  it("check to contain a form element and can simulate a submit", () => {
    const form = wrapper.find("form");
    form.simulate("submit");
  });
});
