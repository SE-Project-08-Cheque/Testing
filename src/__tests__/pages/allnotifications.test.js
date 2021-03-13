import React from 'react'
import {render, screen , waitFor} from '@testing-library/react'

import AllNotifications from '../../pages/allnotifications'
import { BrowserRouter } from "react-router-dom";

import {mocked} from 'ts-jest/utils'
import renderer from 'react-test-renderer'

import API_Service from '../../Services/API_Service';

jest.mock('../../Services/API_Service');
const mockgetAllNotificationByID = mocked(API_Service.getAllNotificationByID,true)

describe('When evrything is OK',()=>{
    beforeEach(async()=>{
        render(<BrowserRouter><AllNotifications/></BrowserRouter>)
        await waitFor(()=>expect(mockgetAllNotificationByID).toHaveBeenCalled())
    })
    test('should render the AllNotification Page without crashing',()=>{
        // screen.debug()
    })
    test('should render the AllNotification Page without crashing',()=>{
        screen.getByText("Notification ID")
        screen.getByText("Date")
        screen.getByText("Title")
        screen.getByText("Message")
    })
})

describe("when the component fethches the details successfully",()=>{
    beforeEach(()=>{
        mockgetAllNotificationByID.mockClear();
    });
    test('should call Allnotification once',async ()=>{
        render(<BrowserRouter><AllNotifications/></BrowserRouter>)
        await waitFor(()=>expect(mockgetAllNotificationByID).toHaveBeenCalledTimes(1))
    })
    test('should renders allnotification details correctly',async ()=>{
        mockgetAllNotificationByID.mockImplementation((id,callback)=>{
            callback({data:{data:[
            {notification_id:'1',date:'2020-02-1',title:'test message',message:'Testing Message for mock'}
        ]}})
          })
    render(<BrowserRouter><AllNotifications/></BrowserRouter>)
    screen.getByText('1')
    screen.getByText('2020-02-1')
    screen.getByText('test message')
    screen.getByText('Testing Message for mock')

    // screen.debug()
    })
    test("matches allnotifications snapshot",()=>{
        const tree=renderer.create(<AllNotifications/>).toJSON()
        expect(tree).toMatchSnapshot();
    })
})