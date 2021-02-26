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
import Signin from '../../pages/signin';

afterEach(cleanup);



it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Signin />, div)
})

it("renders sign in correctly", () => {
    const {getByText} = render(<Signin />)
    // fireEvent.click(getByText("Sign In"))
    expect(getByText("Sign In")).toBeInTheDocument();
    expect(getByText("Sign in")).toBeInTheDocument();
    expect(getByText("Sign in")).toHaveTextContent("Sign in");
})
it("click button correctly", () => {
    const {getByText} = render(<Signin />)
    // const {queryByTestId} = render(<Signin />)
    fireEvent.click(getByText("Sign In"))
    // fireEvent.change(queryByTestId("username_input"),{ target: { value: 'chalindu' } })
    // fireEvent.click(getByTestId("signin-button"))
})

it("check whether inputs works correctly", () => {
    const {getByTestId} = render(<Signin />)
    const fieldUsername = getByTestId('username_input').querySelector('input');
    fireEvent.change(fieldUsername,{ target: { value: 'chalindu' } })
    expect(fieldUsername.value).toBe("chalindu");
    
    const fieldPassword = getByTestId('password_input').querySelector('input');
    fireEvent.change(fieldPassword,{ target: { value: 'password' } })
    expect(fieldPassword.value).toBe("password");
})

// describe("changeInInput", () => {
//         it("onChange", () => {
//             const {queryByTitle} = render(<Signin />)
//             const input = queryByTitle("Username");
//             console.log(input)
//             fireEvent.change(input, {target: { value: "testValue"}}); //change input to testValue. Like we gave an input
//             expect(input.value).toBe("testValue");
//         })
//     })

it("matches snapshot", () => {
    const tree = renderer.create(<Signin />).toJSON();
    expect(tree).toMatchSnapshot();
})