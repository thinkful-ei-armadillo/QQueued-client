import React from "react";
import TestRenderer from "react-test-renderer";
import Header from '../components/Header/Header';
import ReactDOM from "react-dom";
import { MemoryRouter } from 'react-router-dom';
import '../setupTests';
import { mount } from 'enzyme';
 
describe("Header class component", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>, div)
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders nav bar', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)

    expect(wrapper.find('nav'))
  })
  it('renders nav-text', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)

    expect(wrapper.find('.nav-test brand'))
  })

  it('renders nav-text', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)

    expect(wrapper.find('nav-text-right login'))
    expect(wrapper.find('nav-text-right register'))
  })

  it('renders the UI as expected', () => {
    const tree = TestRenderer.create(<MemoryRouter><Header /></MemoryRouter>).toJSON()
    expect(tree).toMatchSnapshot()
  })
});