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
import AccountDetails from "../../pages/Account_Details";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <AccountDetails 
        NIC= "970590054V"
        full_name= "Chalindu Kodikara"
        name_with_init = "K.A. Chalindu"
        dob= "1997/02/29"
      />
    </MemoryRouter>,
    div
  );
});

// it("renders Dashboard page correctly", () => {

//   const { getByTestId } = render(
//     <MemoryRouter>
//       <AccountDetails 
//         NIC= "970590054V"
        // full_name= "Chalindu Kodikara"
        // name_with_init = "K.A. Chalindu"
        // dob= "1997/02/29"
//       />
//     </MemoryRouter>
//   );
//   expect(getByTestId("user_type")).toHaveTextContent("Student");
//   expect(getByTestId("user_id")).toHaveTextContent("970590054V");
//   expect(getByTestId("username")).toHaveTextContent("Chalindu");
//   expect(getByTestId("account_no")).toHaveTextContent("123");
// });


it("matches snapshot", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <AccountDetails NIC= "970590054V"
        full_name= "Chalindu Kodikara"
        name_with_init = "K.A. Chalindu"
        dob= "1997/02/29" />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

