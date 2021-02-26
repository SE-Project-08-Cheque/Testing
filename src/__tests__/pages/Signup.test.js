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
import Signup from "../../pages/signup";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>,
    div
  );
});

it("renders sign up page correctly", () => {
  const { queryByText } = render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>
  );
  expect(queryByText("Sign Up")).toBeInTheDocument();
  expect(queryByText("Sign up")).toBeInTheDocument();
});
it("click sign up button correctly", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>
  );
  fireEvent.click(getByText("Sign Up"));
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
