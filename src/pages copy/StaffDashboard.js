import React from 'react';

import StaffHeader from './components/StaffHeader';
import StaffSideBar from './components/StaffsideBar';

const StaffDashboard = () => {
    return (
        <React.Fragment>
            <StaffSideBar isDisabled="false" />
            <StaffHeader heading={"Cheque"}/>


        </React.Fragment>
    )
}

export default StaffDashboard
