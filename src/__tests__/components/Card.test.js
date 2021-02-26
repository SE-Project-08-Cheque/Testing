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
import Card from "../../components/Card";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Card
        imageUrl="./images/svg-3.svg"
        imageAlt="User"
        type="My Home"
        link="/home"
      />
    </MemoryRouter>,
    div
  );
});
test("it expands when the button is clicked", () => {
  render(
    <MemoryRouter>
      <Card
        imageUrl="./images/svg-3.svg"
        imageAlt="User"
        type="My Home"
        link="/home"
      />
    </MemoryRouter>
  );
});

it("button works correctly", () => {
    const history = createMemoryHistory();
  const { queryByTestId } = render(
    <MemoryRouter
    history={history}
    >
      <Card
        imageUrl="./images/svg-3.svg"
        imageAlt="User"
        type="My Home"
        link="/home"
      />
    </MemoryRouter>
  );
  expect(queryByTestId("go")).toBeTruthy();
//   expect(queryByTestId("go")).toBe("http://localhost/");
expect(history.location.pathname).toBe("/");
  fireEvent.click(queryByTestId("go"));
  expect(history.location.pathname).toBe("/");
});


// it("renders button correctly", () => {
//     const {getByTestId} = render(<Card />)
//     // expect(getByTestId('overview')).toBeTruthy();
//     // expect(getByTestId('personal_details')).toBeInTheDocument();
//     // expect(getByTestId('contact_details')).toBeInTheDocument();
//     // expect(getByTestId('notification')).toBeInTheDocument();
//     // expect(getByTestId('forgot_pin')).toBeInTheDocument();
// })

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
