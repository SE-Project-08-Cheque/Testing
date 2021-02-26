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
import Sidebar from '../../components/Sidebar';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Sidebar />, div)
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Sidebar />)
    expect(getByTestId('overview')).toBeTruthy();
    expect(getByTestId('personal_details')).toBeInTheDocument();
    expect(getByTestId('contact_details')).toBeInTheDocument();
    expect(getByTestId('notification')).toBeInTheDocument();
    expect(getByTestId('forgot_pin')).toBeInTheDocument();
})


it("matches snapshot", () => {
    const tree = renderer.create(<Sidebar />).toJSON();
    expect(tree).toMatchSnapshot();
})

// it("checkButtonRender", () => {
//     const {QueryByTitle} = render(<Sidebar />)
//     expect(queryByTitle("asd")).toBeTruthy(); 
// })

// describe("ClickButton", () => {
//     it("onClick", () => {
//         const {QueryByTitle} = render(<Sidebar />)
//         expect(queryByTitle("asd").innerHTML).toHaveTextContent("PLACE HERE"); 
//         const btn = queryByTitle("asd");
// fireEvent.click(btn)
//         expect(queryByTitle("asd").innerHTML).toHaveTextContent("yOU Clicked"); 
//     })
// })

// describe("changeInInput", () => {
//     it("onChange", () => {
//         const {QueryByTitle} = render(<Sidebar />)
//         const input = queryByTitle("asd");
//         fireEvent.change(input, {target: {value: "testValue"}}); //change input to testValue. Like we gave an input
//         expect(input.value).toBe("testValue");
//     })
// })