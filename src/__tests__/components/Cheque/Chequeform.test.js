import React from 'react'
import {fireEvent, render, screen , waitFor} from '@testing-library/react'
import Chequeform from '../../../components/Chequeform/Chequeform'
import { BrowserRouter } from "react-router-dom";
import UserEvent from '@testing-library/user-event'

describe('When evrything is OK',()=>{
    beforeEach(async()=>{
        render(<BrowserRouter><Chequeform/></BrowserRouter>)
    })
    test('should render the AllCustomer Page without crashing',()=>{
        fireEvent.change(screen.getByText('Pay To Account No'),{
            props:{value:'8888888888'}
        })
        // fireEvent.change(screen.getByRole('iop'),{
        //     props:{payto:'8888888'}
        // })
        // expect(screen.getByRole('iop').value).toBe('8888888')
        
    })
})