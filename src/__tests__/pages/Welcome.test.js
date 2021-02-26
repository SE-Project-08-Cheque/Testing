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
import Welcome from "../../pages/Welcome";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Welcome />
    </MemoryRouter>,
    div
  );
});

it("renders welcome correctly", () => {
  const { queryByTestId } = render(
    <MemoryRouter>
      <Welcome />
    </MemoryRouter>
  );
  expect(queryByTestId("text")).toBeInTheDocument();
  expect(queryByTestId("heading")).toBeInTheDocument();
});
it("click login button correctly", () => {
  const { queryByTestId } = render(
    <MemoryRouter>
      <Welcome />
    </MemoryRouter>
  );
  fireEvent.click(queryByTestId("login"));
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
