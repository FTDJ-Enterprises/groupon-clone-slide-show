import React from 'react';
import styled from 'styled-components';

const SmallMessage = styled.div`
  font-size: 12px;
  color: #333;
  text-align: center;
  font-family: sans-serif;
  width: 650px;
`;

const Compart = styled.span`
font-size: 17px
`;

const HoverMessage = () => (
  <SmallMessage>
    <Compart>&#8853;&nbsp;</Compart>
    Hover Over to Zoom In
  </SmallMessage>
);

export default HoverMessage;
