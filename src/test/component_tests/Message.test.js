import React from "react";
import ReactDOM from "react-dom";
import Message from '../../components/Message/Message';
import '../../setupTests';
import { mount } from 'enzyme';

describe("Message class component", () => {
  const wrapper = mount(<Message />)
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Message />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders textarea", () => {
    expect(wrapper.find('#sendMessage'))
  });
  it("renders button", () => {
    expect(wrapper.find('.slack-message-button'))
  });
  it("renders dropdown", () => {
    expect(wrapper.find('.studentDropDown'))    
  });
  it("renders note", () => {
    expect(wrapper.find('p').text())    
  });
});