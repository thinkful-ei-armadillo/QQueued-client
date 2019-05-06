import React from "react";
import TestRenderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
<<<<<<< HEAD:src/test/RegistrationForm.test.js
import RegistrationFrom from '../components/RegistrationForm/Registration';
import '../setupTests';
import { mount } from 'enzyme';
=======
import RegistrationFrom from '../../components/RegistrationForm/Registration';
>>>>>>> 21725b6f009c7071c5464a59d31d259f94d5494c:src/test/component_tests/RegistrationForm.test.js

describe("RegistrationForm class component", () => {
  const wrapper = mount(<MemoryRouter><RegistrationFrom /></MemoryRouter>)
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MemoryRouter><RegistrationFrom /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders input student radio', () => {
    expect(wrapper.find('#student'))
  })

  it('renders input mentor radio', () => {
    expect(wrapper.find('#mentor'))
  })

  it('renders input username', () => {
    expect(wrapper.find('.user_name'))
  })

  it('renders input fullname', () => {
    expect(wrapper.find('.fullNameInput'))
  })

  it('renders input password', () => {
    expect(wrapper.find('.passwordInput'))
  })
});