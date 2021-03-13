import React from 'react'
import {render, screen , waitFor} from '@testing-library/react'
import ListBuilder from '../../pages/senderviewsentcheques/Chequelist'
import { BrowserRouter } from "react-router-dom";

import {mocked} from 'ts-jest/utils'
import renderer from 'react-test-renderer'

import API_Service from '../../Services/API_Service';

jest.mock('../../Services/API_Service');
const mockgetallchequesbyid = mocked(API_Service.getallchequesbyid,true)

describe('When evrything is OK in send cheque list',()=>{
    beforeEach(async()=>{
        render(<BrowserRouter><ListBuilder/></BrowserRouter>)
        await waitFor(()=>expect(mockgetallchequesbyid).toHaveBeenCalled())
    })
    test('should render the send cheque list Page without crashing',()=>{
        screen.debug()
    })
    test('should render the send cheque list Page without crashing',()=>{
        // screen.getByText("Cheque_id")
        screen.getByText("Sender_id")
        screen.getByText("Receiver_id")
        screen.getByText("Amount")
        screen.getByText("Status")
        screen.getByText("Date")
        screen.getByText("Note")
    })
})

describe("when the component fethches the details successfully",()=>{
    beforeEach(()=>{
        mockgetallchequesbyid.mockClear();
    });
    test('should call send cheque list once',async ()=>{
        render(<BrowserRouter><ListBuilder/></BrowserRouter>)
        await waitFor(()=>expect(mockgetallchequesbyid).toHaveBeenCalledTimes(1))
    })
    test('should',async ()=>{
        mockgetallchequesbyid.mockImplementation((id,callback)=>{
            callback({data:{data:[
            {cheque_id:'19',sender_id:'111', receiver_id:'222', amount:'5500', date:'2021-02-15', note:'Sample note for mock check evalute me'}
        ]}})
          })
    render(<BrowserRouter><ListBuilder/></BrowserRouter>)
        screen.getByText('19')
        screen.getByText('111')
        screen.getByText('222')
        screen.getByText('2021-02-15')
        screen.getByText('5500')
        screen.getByText('Sample note for mock check evalute me')
        screen.debug()
    })
    test("matches send cheque list snapshot",()=>{
        const tree=renderer.create(<ListBuilder/>).toJSON()
        expect(tree).toMatchSnapshot();
    })
})