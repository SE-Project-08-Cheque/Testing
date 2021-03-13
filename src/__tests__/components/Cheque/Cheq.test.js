import React from 'react'
import ReactDOM from 'react-dom'
import Cheq from '../../../components/Cheq/Cheq'
import { BrowserRouter } from "react-router-dom";
import {render,cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import renderer from 'react-test-renderer'
// import {} from 'jest-dom'
afterEach(cleanup)
it("Chequeform renders without crashing",()=>{
    const div=document.createElement("div")
    ReactDOM.render(<Cheq/>,div)
})
it("Chequeform renders without crashing",()=>{
    const {getByTestId} = render(<Cheq 
        name={"Dakshitha"}
        designation={"Manager"}
        company={"CIC"}
        city={"Colombo"}
        reason1={"To Buy"}
        reason2={""}
        amount={"5000"}
        payto={"8056738"} />)
    expect(getByTestId('cheque')).toHaveTextContent("Dakshitha")
    expect(getByTestId('cheque')).toHaveTextContent("Manager")
    expect(getByTestId('cheque')).toHaveTextContent("CIC")
    expect(getByTestId('cheque')).toHaveTextContent("Colombo")
    expect(getByTestId('cheque')).toHaveTextContent("To Buy")
    expect(getByTestId('cheque')).toHaveTextContent("5,000.00")
})
it("matches snapshot",()=>{
    const tree=renderer.create(<Cheq/>).toJSON()
    expect(tree).toMatchSnapshot();
})