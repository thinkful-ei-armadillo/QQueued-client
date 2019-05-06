import React from "react";
import '../setupTests'
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import Chat from '../components/Chat/Chat';
import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';


describe('Chat class component', () => {
  it('should render Input', () => {
    const wrapper = mount(<Chat />);
    expect(wrapper.find('.sendMessage')).toHaveLength(1)
  })

  it('should render chat ref', () => {
    const wrapper = mount(<Chat />);
    const mockRef = {}
    expect(wrapper.ref(mockRef))
  })

  it('should render chat window', () => {
    const wrapper = mount(<Chat />);
    expect(wrapper.find('.messages'));
  })

  it('should render chat send button', () => {
    const wrapper = mount(<Chat />)
    expect(wrapper.find('.Button'))
  })

  it('renders the UI as expected', () => {
    const tree = TestRenderer.create(<MemoryRouter><Chat /></MemoryRouter>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})