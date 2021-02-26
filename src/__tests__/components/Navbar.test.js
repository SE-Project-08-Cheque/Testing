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
import Navbar from '../../components/Navbar';



afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Navbar heading="onlinecheque"/>, div)
})

it("renders navbar buttons correctly", () => {
    const {getByTestId} = render(<Navbar />)
    expect(getByTestId('home')).toBeTruthy();
    expect(getByTestId('about_us')).toBeInTheDocument();
    expect(getByTestId('log_out')).toBeTruthy();

    
})

it("buttons links correct", () => {
    const {getByText} = render(<Navbar />)
    expect(getByText("Home").href).toBe("http://localhost/")
    expect(getByText("About Us").href).toBe("https://drive.google.com/file/d/1AdNMc9rVaYs0j5dFtpDZk72LFPk_h6Hv/view?usp=sharing")
})
describe("ClickButton", () => {
        it("onClick", () => {
            const {queryByTestId} = render(<Navbar />)
            expect(queryByTestId("log_out")).toHaveTextContent("Log out"); 
            const btn = queryByTestId("log_out");
    fireEvent.click(btn)
            // expect(queryByTestId("asd").innerHTML).toHaveTextContent("yOU Clicked"); 
        })
    })

// it('routes to a new route', async () => {
//     const history = createMemoryHistory();
  
//     // mock push function
//     history.push = jest.fn();
  
//     const { getByText } = render(
//       <MemoryRouter history={history}>
//         <Link to="/">Home</Link>
//       </MemoryRouter>
//     );
  
//     fireEvent.click(getByText('Home'));
  
//     // spy on push calls, assert on url (parameter)
//     expect(history.push).toHaveBeenCalledWith("/");
//   });

it("matches snapshot", () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
})