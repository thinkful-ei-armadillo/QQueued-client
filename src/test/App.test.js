import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";
import TestRenderer from 'react-test-renderer';
import App from '../components/App/App';

describe('App class component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = TestRenderer.create(<MemoryRouter><App /></MemoryRouter>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
