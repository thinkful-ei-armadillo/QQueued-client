import React from 'react';
import { MemoryRouter } from "react-router-dom";
import TestRenderer from 'react-test-renderer';
import App from '../components/App/App';

describe('App class component', () => {

  it('renders without crashing', () => {
    const testApp = TestRenderer.create(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(testApp.getInstance())
    testApp.unmount()
  });
})
