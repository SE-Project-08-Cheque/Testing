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
import Footer1 from '../../components/Footer1';


afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Footer1 />, div)
})

it("renders footer correctly", () => {
    const {getByTestId} = render(<Footer1 />)
    expect(getByTestId('designer')).toBeTruthy();
    expect(getByTestId('designer')).toHaveTextContent("Designed by University of Moratuwa");
})


it("matches snapshot", () => {
    const tree = renderer.create(<Footer1 />).toJSON();
    expect(tree).toMatchSnapshot();
})