import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import CompanyDetail from "../CompanyDetail/CompanyDetail";
import CompanyContextProvider from "../../contexts/CompanyContext";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("test all company detail values returned from API", () => {
  const wrapper = mount(
    <BrowserRouter>
      <CompanyContextProvider>
        <CompanyDetail
          company_logo={"https://hello.com/img.png"}
          title={"Senior Frontend Engineer"}
          type={"Full Time"}
          location={"remote"}
          company_url={"https://img.ly"}
          url={"https://google.com"}
          description={
            "Hi! We are that super-groundbreaking technology provider."
          }
          how_to_apply={"Contact me at hello@gmail.com"}
        />
      </CompanyContextProvider>
    </BrowserRouter>
  );
//   console.log(wrapper.debug({ verbose: true }));
  it("check type value to be inside a strong-element", () => {
    expect(wrapper.find("strong").text()).toBe("Full Time");
  });
  it("check title value to be inside an h2-element", () => {
    expect(wrapper.find("h2").text()).toBe("Senior Frontend Engineer");
  });
  it("check that url value is added to the href attribute for an a-element", () => {
    expect(wrapper.find("a").at(1).prop("href")).toEqual('https://google.com')
  });
  it("check company_url value to be inside an a-element", () => {
    expect(wrapper.find("a").at(0).text()).toBe("https://img.ly");
  });
  it("check description value to be inside a p-element", () => {
    const element = mount(
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<p>Hi! We are that super-groundbreaking technology provider.</p>",
        }}
      />
    );
    expect(element.html()).toContain(
      "<p>Hi! We are that super-groundbreaking technology provider.</p>"
    );
  });
  it("check that company_logo is added to the src attribute for a img-element", () => {
    expect(wrapper.find("img").prop("src")).toEqual('https://hello.com/img.png')
  });
});
