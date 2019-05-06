import React from "react";
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import Chat from '../components/Chat/Chat';
import TestRenderer from 'react-test-renderer';

describe('Chat class component', () => {
  it('renders without crashing', () => {
    const testChat = TestRenderer.create(
      <MemoryRouter>
        <Chat />
      </MemoryRouter>
    );
    
    expect(testChat.getInstance())
    testChat.unmount()
  })
})