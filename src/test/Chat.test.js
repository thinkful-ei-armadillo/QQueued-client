import React from "react";
import '../setupTests'
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import Chat from '../components/Chat/Chat';
import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';


describe('Chat class component', () => {
<<<<<<< HEAD
  it('should render Input', () => {
    const wrapper = mount(<Chat />);
    expect(wrapper.find('.sendMessage')).toHaveLength(1)
  })

  it('should render Input', () => {
    const wrapper = mount(<Chat />);
    const mockRef = {}
    expect(wrapper.ref(mockRef))
  })

  it('renders the UI as expected', () => {
    const tree = TestRenderer.create(<MemoryRouter><Chat /></MemoryRouter>).toJSON()
    expect(tree).toMatchSnapshot()
=======
  it('renders without crashing', () => {
    const testChat = TestRenderer.create(
      <MemoryRouter>
        <Chat />
      </MemoryRouter>
    );
    
    expect(testChat.getInstance())
    testChat.unmount()
>>>>>>> 849a9b91ebb189095716b83b150a1148e7927a18
  })
})