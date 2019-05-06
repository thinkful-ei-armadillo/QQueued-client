import React from "react";
import ReactDOM from 'react-dom';
import '../../setupTests'
import TestRenderer from "react-test-renderer";
import LoginFrom from "../../components/LoginForm/LoginForm"
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

describe("LoginForm class component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
    <MemoryRouter>
      <LoginFrom />
    </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should render Input', () => {
    const wrapper = mount(<MemoryRouter><LoginFrom /></MemoryRouter>);
    expect(wrapper.find('input'))
  })

  it('should render password Input', () => {
    const wrapper = mount(<MemoryRouter><LoginFrom /></MemoryRouter>);
    expect(wrapper.find('#login-password-input'))
  })

  it('should render user Input', () => {
    const wrapper = mount(<MemoryRouter><LoginFrom /></MemoryRouter>);
    expect(wrapper.find('#login-username-input'))
  })

  it('should render user label', () => {
    const wrapper = mount(<MemoryRouter><LoginFrom /></MemoryRouter>);
    expect(wrapper.find('.Label username-login'))
  })

  it('should render login button', () => {
    const wrapper = mount(<MemoryRouter><LoginFrom /></MemoryRouter>);
    expect(wrapper.find('.loginButton'))
  })

  it('should render Input', () => {
    const wrapper = mount(<MemoryRouter><LoginFrom /></MemoryRouter>);
    const mockRef = {}
    expect(wrapper.ref(mockRef))
  })
});

// login-password-input