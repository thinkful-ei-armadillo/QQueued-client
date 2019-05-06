import React from "react";
import TestRenderer from "react-test-renderer";
import Header from '../components/Header/Header';
import { MemoryRouter } from 'react-router-dom';

describe("Header class component", () => {
  it("renders without crashing", () => {
    const testHeader = TestRenderer.create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(testHeader.getInstance());
    testHeader.unmount();
  });

  it('renders the UI as expected', () => {
    const tree = TestRenderer.create(<MemoryRouter><Header /></MemoryRouter>).toJSON()
    expect(tree).toMatchSnapshot()
  })
});