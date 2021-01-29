import React from "react";
import Enzyme, { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import CompanyList from "../CompanyList/CompanyList";
import CompanyContextProvider from "../../contexts/CompanyContext";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const data = [
  {
    id: "81156bdd-6aae-49af-a0d3-fd205ed92045",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/81156bdd-6aae-49af-a0d3-fd205ed92045",
    created_at: "Mon Jan 25 13:25:27 UTC 2021",
    company: "Booz Allen",
    company_url: null,
    location: "Annapolis Junction, MD",
    title: "R0099678 - Malware Reverse Engineer, Mid",
    description:
      '<p>Key Role:</p>\n<p>Support day-to-day operations focused on building a next generation automated malware analysis system. Apply advanced consulting and extensive technical expertise as well as full industry knowledge to develop innovative solutions to complex problems. Engage with multiple functional groups to comprehend client challenges, prototype new ideas and new technologies, and help to create solutions to drive the next wave of innovation. Analyze forensic, event, and signature data and binary, mobile, and executable code to detect a variety of threat types, including malware and advanced persistent threats. Perform analysis on captured volatile data, log data, and captured network traffic data to identify intrusion related artifacts in order to implement immediate defensive countermeasures.</p>\n<p>Basic Qualifications:</p>\n<ul>\n<li>4+ years of experience in reverse engineering roles</li>\n<li>Experience with C, Python, and JavaScript</li>\n<li>Experience with disassembly tools and functional exploits, the creation of custom shellcode, code to bypass typical security measures, and ring 0 programming</li>\n<li>TS/SCI clearance with a polygraph</li>\n<li>BA or BS degree in CS, Computer Engineering, or Information Systems or 8+ years of experience in malware reverse engineering roles in lieu of a degree</li>\n</ul>\n<p>Additional Qualifications:</p>\n<ul>\n<li>Experience with techniques used in kill chain analysis</li>\n<li>Ability to use static and dynamic tools and techniques to analyze and reverse-engineer malware</li>\n</ul>\n<p>Clearance:</p>\n<p>Applicants selected will be subject to a security investigation and may need to meet eligibility requirements for access to classified information; TS/SCI clearance with polygraph is required.</p>\n<p>Visit <a href="https://careers.boozallen.com/jobs/JobDetail/Annapolis-Junction-Malware-Reverse-Engineer-Mid-R0099678/35608?source=JB-16301">https://careers.boozallen.com/jobs/JobDetail/Annapolis-Junction-Malware-Reverse-Engineer-Mid-R0099678/35608?source=JB-16301</a> to create a profile and apply to job number R0099678, click on Find Your Job and plug in this number.</p>\n<p>We’re an EOE that empowers our people—no matter their race, color, religion, sex, gender identity, sexual orientation, national origin, disability, or veteran status—to fearlessly drive change.</p>\n',
    how_to_apply:
      '<p><a href="https://careers.boozallen.com/jobs/JobDetail/Annapolis-Junction-Malware-Reverse-Engineer-Mid-R0099678/35608?source=JB-16301">https://careers.boozallen.com/jobs/JobDetail/Annapolis-Junction-Malware-Reverse-Engineer-Mid-R0099678/35608?source=JB-16301</a></p>\n',
    company_logo: "https://img.src/l3l2dyDIda",
  },
];

describe("Test Company List View", () => {
  let wrapper;

  it("check to show an li element to contain text if loading is false and data exists", () => {
    wrapper = mount(
      <BrowserRouter>
        <CompanyContextProvider>
          <CompanyList data={data} loading={false} />
        </CompanyContextProvider>
      </BrowserRouter>
    );

    expect(wrapper.find("li").at(0).text()).toContain(
      "R0099678 - Malware Reverse Engineer, Mid"
    );
  });

  it("check to show 'Loading...' if loading is true", () => {
    wrapper = mount(
      <BrowserRouter>
        <CompanyContextProvider>
          <CompanyList data={data} loading={true} />
        </CompanyContextProvider>
      </BrowserRouter>
    );

    expect(wrapper.find("p").at(0).text()).toContain("Loading...");
  });

  it("check to show 'No jobs found.' if data is empty ", () => {
    wrapper = mount(
      <BrowserRouter>
        <CompanyContextProvider>
          <CompanyList data={[]} loading={false} />
        </CompanyContextProvider>
      </BrowserRouter>
    );

    expect(wrapper.find("p").text()).toContain("No jobs found.");
  });

  it("check so company_logo value is rendered inside an img src attribute correctly", () => {
    wrapper = mount(
      <BrowserRouter>
        <CompanyContextProvider>
          <CompanyList data={data} loading={false} />
        </CompanyContextProvider>
      </BrowserRouter>
    );
    expect(wrapper.find("img").prop("src")).toEqual(
      "https://img.src/l3l2dyDIda"
    );
  });
  it("check so title is rendered inside a h2-element in the list", () => {
    wrapper = mount(
      <BrowserRouter>
        <CompanyContextProvider>
          <CompanyList data={data} loading={false} />
        </CompanyContextProvider>
      </BrowserRouter>
    );
    expect(wrapper.find("h2").text()).toContain(
      "R0099678 - Malware Reverse Engineer, Mid"
    );
  });
});
