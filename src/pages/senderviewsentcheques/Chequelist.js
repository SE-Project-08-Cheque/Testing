import React, { Component, useState } from 'react';
import { Listtable } from './Listtable';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import SessionService from '../../Services/SessionService';
import { Redirect } from 'react-router-dom';

function ListBuilder(props) {
  const [state, setState] = useState({
    modal: '',
    modalopen: false
  })

  const islogged = SessionService.isAuthenticated();
  if (!islogged) {
    return (
      <Redirect
        to={{ pathname: '/', state: { from: props.location } }}
      />
    );
  };


 
  var Changemodal = (event, t) => {
    console.log(t)
    setState({
      modal: t,
      modalopen: true
    });
  }
  var closemodal = (event) => {
    setState({
      modalopen: false
    })
  }

  return (
    <Listtable modal={state.modal} change={Changemodal} open={state.modalopen} close={closemodal} />
    // <Tabs size="md" variant="enclosed" width="75%" margin="auto">
    //   <TabList>
    //     <Tab>One</Tab>
    //     <Tab>Two</Tab>
    //   </TabList>
    //   <TabPanels>
    //     <TabPanel>
    //       <Listtable
    //         modal={this.state.modal}
    //         change={this.Changemodal}
    //         open={this.state.modalopen}
    //         close={this.closemodal}
    //       />
    //     </TabPanel>
    //     <TabPanel>
    //       <p>two!</p>
    //     </TabPanel>
    //   </TabPanels>
    // </Tabs>
  );

}
export default ListBuilder;
