import React from 'react';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from "../components/Section4";
import styled from 'styled-components';
import data from '../data'

const Contentcontainer = styled.div`
  max-width: 1500px;
  margin: auto;
  height: auto;
  position: relative;
  padding: 0 30px 0 30px;

  h3 {
    font-size: 24px;
  }

  hr {
    margin: 30px 0;
    border: none;
    border-top: 1px solid #d5d5d5;
    width: auto;
  }
`

const Content = () => {
    return (
        <Contentcontainer>
            <Section1 data={data.project}/>
            <Section2 data={data.about}/>
            <Section3/>
            <Section4/>
        </Contentcontainer>
    );
};

export default Content;