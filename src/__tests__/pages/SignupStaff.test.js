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
import SignupStaff from "../../pages/signupstaff";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <SignupStaff />
    </MemoryRouter>,
    div
  );
});

it("renders sign in page correctly", () => {
  const { queryByText } = render(
    <MemoryRouter>
      <SignupStaff />
    </MemoryRouter>
  );
  expect(queryByText("Add Member")).toBeInTheDocument();
  expect(queryByText("Sign up")).toBeInTheDocument();
});
it("click sign up button correctly", () => {
  const { getByText } = render(
    <MemoryRouter>
      <SignupStaff />
    </MemoryRouter>
  );
  fireEvent.click(getByText("Add Member"));
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <SignupStaff />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
