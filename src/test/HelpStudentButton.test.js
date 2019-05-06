import React from "react";
import TestRenderer from "react-test-renderer";
import HelpStudentButton from '../components/HelpStudentButton/HelpStudentButton';
import ReactDOM from 'react-dom';
import '../setupTests';
import { mount } from 'enzyme';

describe("HelpStudentButton function component", () => {
  const div = document.createElement("div");
    ReactDOM.render(<HelpStudentButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  
  it('renders the UI as expected', () => {
    const tree = TestRenderer.create(<HelpStudentButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders help button', () => {
    const wrapper = mount(<HelpStudentButton />);
    expect(wrapper.find('.Button'))
  })

  it('renders help button text', () => {
    const wrapper = mount(<HelpStudentButton />);
    expect(wrapper.find('.Button').text())
  })
});