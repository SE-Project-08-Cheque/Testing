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
import MainSection from '../../components/MainSection';
import { MemoryRouter } from 'react-router-dom';


afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MemoryRouter><MainSection /></MemoryRouter>, div)
})

it("renders main section correctly", () => {
    const {getByTestId} = render(<MemoryRouter><MainSection /></MemoryRouter>)
    expect(getByTestId('welcome')).toBeTruthy();
    expect(getByTestId('welcome')).toHaveTextContent("Welcome");
    expect(getByTestId('send_cheque')).toBeInTheDocument();
    expect(getByTestId('send_cheque')).toHaveTextContent("Send a cheque");
    expect(getByTestId('button')).toBeInTheDocument();
    expect(getByTestId('button')).toHaveTextContent("Click Here");

})
it("click button correctly", () => {
    const {getByTestId} = render(<MemoryRouter><MainSection /></MemoryRouter>)
    fireEvent.click(getByTestId('button'));
})

it("matches snapshot", () => {
    const tree = renderer.create(<MemoryRouter><MainSection /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})