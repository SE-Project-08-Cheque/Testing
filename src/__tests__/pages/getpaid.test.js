import React from 'react'
import {render, screen , waitFor} from '@testing-library/react'

import Getpaid from '../../pages/getpaid'
import { BrowserRouter } from "react-router-dom";

import {mocked} from 'ts-jest/utils'
import renderer from 'react-test-renderer'

import API_Service from '../../Services/API_Service';

jest.mock('../../Services/API_Service');
const mockgetAllgetReceivedCheque = mocked(API_Service.getAllgetReceivedCheque,true)

describe('When evrything is OK in getpaid list',()=>{
    beforeEach(async()=>{
        render(<BrowserRouter><Getpaid/></BrowserRouter>)
        await waitFor(()=>expect(mockgetAllgetReceivedCheque).toHaveBeenCalled())
    })
    test('should render the getpaid Page without crashing',()=>{
        // screen.debug()
    })
    test('should render the getpaid Page without crashing',()=>{
        screen.getByText("Cheque ID")
        screen.getByText("Sender ID")
        screen.getByText("Amount")
        screen.getByText("Date")
        screen.getByText("Note")
        screen.getByText("Action")
    })
})

describe("when the component fethches the details successfully",()=>{
    beforeEach(()=>{
        mockgetAllgetReceivedCheque.mockClear();
    });
    test('should call getpaid api once',async ()=>{
        render(<BrowserRouter><Getpaid/></BrowserRouter>)
        await waitFor(()=>expect(mockgetAllgetReceivedCheque).toHaveBeenCalledTimes(1))
    })
    test('should',async ()=>{
        mockgetAllgetReceivedCheque.mockImplementation((id,callback)=>{
            callback({data:{data:[
            {status:"PENDING", cheque_id:'10', sender_id:'11', amount:'7000', date:'2020-12-1', note:'mock note for getpaid'}
        ]}})
          })
    render(<BrowserRouter><Getpaid/></BrowserRouter>)
    screen.getByText('11')
    screen.getByText('7000')
    screen.getByText('2020-12-1')
    screen.getByText('mock note for getpaid')

    // screen.debug()
    })
    test("matches getpaid snapshot",()=>{
        const tree=renderer.create(<Getpaid/>).toJSON()
        expect(tree).toMatchSnapshot();
    })
})