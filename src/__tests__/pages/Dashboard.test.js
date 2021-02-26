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
import Dashboard from "../../pages/Dashboard";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  const user = {
    user_type: "Student",
    user_id: "970590054V",
    username: "Chalindu",
    account_no: "123"
}
  ReactDOM.render(
    <MemoryRouter>
      <Dashboard 
        user_type= "Student"
        user_id= "970590054V"
        username= "Chalindu"
        account_no= "123"
      />
    </MemoryRouter>,
    div
  );
});

it("renders Dashboard page correctly", () => {

  const { getByTestId } = render(
    <MemoryRouter>
      <Dashboard 
        user_type= "Student"
        user_id= "970590054V"
        username= "Chalindu"
        account_no= "123"
      />
    </MemoryRouter>
  );
  expect(getByTestId("user_type")).toHaveTextContent("Student");
  expect(getByTestId("user_id")).toHaveTextContent("970590054V");
  expect(getByTestId("username")).toHaveTextContent("Chalindu");
  expect(getByTestId("account_no")).toHaveTextContent("123");
});


it("matches snapshot", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Dashboard user_type= "Student"
        user_id= "970590054V"
        username= "Chalindu"
        account_no= "123" />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
