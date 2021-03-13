import React from 'react'
import {render, screen , waitFor} from '@testing-library/react'

import Approve from '../../pages/approve'
import { BrowserRouter } from "react-router-dom";

import {mocked} from 'ts-jest/utils'
import renderer from 'react-test-renderer'

import API_Service from '../../Services/API_Service';

jest.mock('../../Services/API_Service');
const mockgetAllDataCustomerTablePending = mocked(API_Service.getAllDataCustomerTablePending,true)

describe('When evrything is OK in approve cheque details',()=>{
    beforeEach(async()=>{
        render(<BrowserRouter><Approve/></BrowserRouter>)
        await waitFor(()=>expect(mockgetAllDataCustomerTablePending).toHaveBeenCalled())
    })
    test('should render the approve cheque details Page without crashing',()=>{
        // screen.debug()
    })
    test('should render the approve cheque details Page without crashing',()=>{
        screen.getByText("Customer ID")
        screen.getByText("Account No")
        screen.getByText("NIC")
        screen.getByText("Contact")
        screen.getByText("Created Date")
        screen.getByText("Postal Code")
    })
})

describe("when the component fethches the details successfully",()=>{
    beforeEach(()=>{
        mockgetAllDataCustomerTablePending.mockClear();
    });
    test('should call approve cheque details once',async ()=>{
        render(<BrowserRouter><Approve/></BrowserRouter>)
        await waitFor(()=>expect(mockgetAllDataCustomerTablePending).toHaveBeenCalledTimes(1))
    })
    test('should renders approve cheque details correctly',async ()=>{
        mockgetAllDataCustomerTablePending.mockImplementation((callback)=>{
            callback({data:{data:[
            {NIC: "766855383V", account_no: 1234567892, city: "negombo", contact_primary: 728908140, created_date: "2020-02-10", customer_id: 33, dob: "2001-02-22", email: "dakshitha@gmail.com", full_name: "Dakshitha Suriyaaratchie", gender: "Male",
            house_no: "123/2", name_with_init: "name_with_ini1", pin: 133456, postal_code: 11320000, street: "streee"}
        ]}})
          })
    render(<BrowserRouter><Approve/></BrowserRouter>)
    screen.getByText('766855383V')
    screen.getByText('1234567892')
    screen.getByText('negombo')
    screen.getByText('728908140')
    screen.getByText('2020-02-10')
    screen.getByText('33')
    screen.getByText('2001-02-22')
    screen.getByText('dakshitha@gmail.com')
    screen.getByText('Dakshitha Suriyaaratchie')
    screen.getByText('Male')

    // screen.debug()
    })
    test("matches approve cheque details snapshot",()=>{
        const tree=renderer.create(<Approve/>).toJSON()
        expect(tree).toMatchSnapshot();
    })
})