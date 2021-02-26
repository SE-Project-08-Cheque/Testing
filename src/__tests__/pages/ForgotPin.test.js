// import dependencies
import React from "react";
// import react dom
import ReactDOM from "react-dom";
// import react-testing methods
import { render, cleanup, fireEvent } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// import renderer for take snapshots
import renderer from "react-test-renderer";

// import the component for testing
import ForgotPin from "../../pages/FogotPin";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ForgotPin />, div);
});

it("renders forgot pin page correctly", () => {
  const { queryByTestId } = render(<ForgotPin />);
    expect(queryByTestId("forgotpin-text")).toBeInTheDocument();
});

it("check button", () => {
    const { queryByTestId } = render(<ForgotPin />);
    fireEvent.click(queryByTestId("getpin-button"));
})


it("matches snapshot", () => {
  const tree = renderer.create(<ForgotPin />).toJSON();
  expect(tree).toMatchSnapshot();
});
