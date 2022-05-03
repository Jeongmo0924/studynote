import React from 'react';
import styled from 'styled-components';
import Img1 from '../assets/img/map.jpg';

const Section4container = styled.div`
  height: fit-content;
  padding-top: 50px;
  display: flex;
  img {
    width: 100%;
    flex: 0 1 auto;
  }
`

const Section4 = () => {
    return (
        <Section4container>
            <img src={Img1} alt='map' />
        </Section4container>
    );
};

export default Section4;