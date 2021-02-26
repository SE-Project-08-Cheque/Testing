// import dependencies
import React from 'react';
// import react dom
import ReactDOM from 'react-dom';
// import react-testing methods
import {render, cleanup, fireEvent} from '@testing-library/react';
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// import renderer for take snapshots
import renderer from 'react-test-renderer';

// import the component for testing
import Footer from '../../components/Footer';
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MemoryRouter><Footer /></MemoryRouter>, div)
})

it("renders footer correctly", () => {
    const {getByTestId} = render(<MemoryRouter><Footer /></MemoryRouter>)
    expect(getByTestId('subcription-heading')).toBeTruthy();
    expect(getByTestId('subcription-heading')).toHaveTextContent("Do you need technical guidance");
    expect(getByTestId('subcription-text')).toBeTruthy();
    expect(getByTestId('subcription-text')).toHaveTextContent("Send us what you want to know");
    expect(getByTestId('send')).toBeTruthy();
    expect(getByTestId('send')).toHaveTextContent("Send us");


})


it("matches snapshot", () => {
    const tree = renderer.create(<MemoryRouter><Footer /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})