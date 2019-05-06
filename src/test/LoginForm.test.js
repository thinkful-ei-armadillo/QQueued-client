import React from "react";
import '../setupTests'
import TestRenderer from "react-test-renderer";
import LoginFrom from "../components/LoginForm/LoginForm"
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

describe("", () => {
  it('should render Input', () => {
    const wrapper = mount(<MemoryRouter><LoginFrom /></MemoryRouter>);
    expect(wrapper.find('input'))
  })

  it('should render Input', () => {
    const wrapper = mount(<MemoryRouter><LoginFrom /></MemoryRouter>);
    const mockRef = {}
    expect(wrapper.ref(mockRef))
  })
});