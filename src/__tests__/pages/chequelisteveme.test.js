import React from 'react'
import {render, screen , waitFor} from '@testing-library/react'

import Evaledbyme from '../../pages/ChequelistEve'
import { BrowserRouter } from "react-router-dom";

import {mocked} from 'ts-jest/utils'
import renderer from 'react-test-renderer'

import API_Service from '../../Services/API_Service';

jest.mock('../../Services/API_Service');
const mockgetallchequesbysid = mocked(API_Service.getallchequesbysid,true)

describe('When evrything is OK in evaluated cheque list',()=>{
    beforeEach(async()=>{
        render(<BrowserRouter><Evaledbyme/></BrowserRouter>)
        await waitFor(()=>expect(mockgetallchequesbysid).toHaveBeenCalled())
    })
    test('should render the evaluated cheque list Page without crashing',()=>{
        // screen.debug()
    })
    test('should render the evaluated cheque list Page without crashing',()=>{
        screen.getByText("Cheque ID")
        screen.getByText("Sender ID")
        screen.getByText("Receiver ID")
        screen.getByText("Amount")
        screen.getByText("Status")
        screen.getByText("Date")
        screen.getByText("Note")
    })
})

describe("when the component fethches the details successfully",()=>{
    beforeEach(()=>{
        mockgetallchequesbysid.mockClear();
    });
    test('should call evaluated cheque list once',async ()=>{
        render(<BrowserRouter><Evaledbyme/></BrowserRouter>)
        await waitFor(()=>expect(mockgetallchequesbysid).toHaveBeenCalledTimes(1))
    })
    test('should',async ()=>{
        mockgetallchequesbysid.mockImplementation((id,callback)=>{
            callback({data:{data:[
            {cheque_id:'19',sender_id:'111', receiver_id:'222', amount:'5500', date:'2021-02-15', note:'Sample note for mock check evalute me'}
        ]}})
          })
    render(<BrowserRouter><Evaledbyme/></BrowserRouter>)
        screen.getByText('19')
        screen.getByText('111')
        screen.getByText('222')
        screen.getByText('2021-02-15')
        screen.getByText('5500')
        screen.getByText('Sample note for mock check evalute me')

    // screen.debug()
    })
    test("matches evaluated cheque list snapshot",()=>{
        const tree=renderer.create(<Evaledbyme/>).toJSON()
        expect(tree).toMatchSnapshot();
    })
})