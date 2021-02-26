import React from 'react';
import styled from 'styled-components';
const Stylec=styled.div`
    width: 240px;
    min-height: 40px;
    max-height: 50px;
    margin-left: -60px;
    margin-top: 40px;
    padding-left: 50px;
    padding-right: 50px;
    -ms-transform: rotate(20deg);
    transform: rotate(315deg);
    z-index: 2;
    position: absolute;
    overflow: hidden;
    border-style: double;
    text-align: center;
    padding:auto;
    `;
const Txt =styled.div`
padding:auto;
    font-size: 12px;
`;
const Cross =(props)=>{
    return(
        <Stylec>{props.crosstxt}</Stylec>
        );
};
export default Cross;

