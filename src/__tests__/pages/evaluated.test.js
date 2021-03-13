import React from 'react'
import {render, screen , waitFor} from '@testing-library/react'

import Evaluated from '../../pages/evaluated'
import { BrowserRouter } from "react-router-dom";

import {mocked} from 'ts-jest/utils'
import renderer from 'react-test-renderer'

import API_Service from '../../Services/API_Service';

jest.mock('../../Services/API_Service');
const mockgetchecktoEval = mocked(API_Service.checktoEval,true)

describe('When evrything is OK in evaluated cheque',()=>{
    beforeEach(async()=>{
        render(<BrowserRouter><Evaluated/></BrowserRouter>)
        await waitFor(()=>expect(mockgetchecktoEval).toHaveBeenCalled())
    })
    test('should render the evaluated cheque Page without crashing',()=>{
        screen.debug()
    })
    test('should render the evaluated cheque Page without crashing',()=>{
        screen.getByText("Cheque ID")
        screen.getByText("Sender ID")
        screen.getByText("Date")
        screen.getByText("PASS")
        screen.getByText("Amount")
    })
})

describe("when the component fethches the details successfully",()=>{
    beforeEach(()=>{
        mockgetchecktoEval.mockClear();
    });
    test('should call evaluated cheque once',async ()=>{
        render(<BrowserRouter><Evaluated/></BrowserRouter>)
        await waitFor(()=>expect(mockgetchecktoEval).toHaveBeenCalledTimes(1))
    })
    test('should display evaluated cheque details correclty',async ()=>{
        mockgetchecktoEval.mockImplementation((callback)=>{
            callback({data:{data:[
            {status:'EVALUATING', cheque_id:'1',sender_id:'23', receiver_id:'3', amount:'5000', date:'2020-02-1', note:'Sample note for mock'},
            // {cheque_id:'19',sender_id:'239', receiver_id:'39', amount:'4000', date:'2020-02-15', note:'Sample note for mock non evaluating'}
        ]}})
          })
    render(<BrowserRouter><Evaluated/></BrowserRouter>)
        screen.getByText('1')
        screen.getByText('23')
        screen.getByText('2020-02-1')
        screen.getByText('5000')
        screen.getByText('Sample note for mock')
    // screen.debug()
    })
    test('should not display - non evaluated',async ()=>{
        mockgetchecktoEval.mockImplementation((callback)=>{
            callback({data:{data:[
            {cheque_id:'19',sender_id:'239', receiver_id:'39', amount:'4000', date:'2020-02-15', note:'Sample note for mock non evaluating'}
        ]}})
          })
        render(<BrowserRouter><Evaluated/></BrowserRouter>)
        expect(screen.queryByText('239')).not.toBeInTheDocument()
        expect(screen.queryByText('4000')).not.toBeInTheDocument()
        expect(screen.queryByText('2020-02-15')).not.toBeInTheDocument()
        expect(screen.queryByText('Sample note for mock non evaluating')).not.toBeInTheDocument()

    // screen.debug()
    })
    test("matches evaluated cheque snapshot",()=>{
        const tree=renderer.create(<Evaluated/>).toJSON()
        expect(tree).toMatchSnapshot();
    })
})