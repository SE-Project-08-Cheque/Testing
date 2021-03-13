import React from 'react'
import {render, screen , waitFor} from '@testing-library/react'
import ChequeBuilder from '../../pages/ChequeBuilder/ChequeBuilder'
import { BrowserRouter } from "react-router-dom";


describe('When evrything is OK',()=>{
    test('should render the AllCustomer Page without crashing',()=>{
        render(<BrowserRouter><ChequeBuilder/></BrowserRouter>)
        // screen.debug()
    })
})