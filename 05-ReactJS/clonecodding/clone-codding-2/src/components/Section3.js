import React from 'react';
import styled from 'styled-components';

const Section3container = styled.div`
  div {
    padding-top: 65px;
  }

  hr {
    margin-bottom: 20px;
  }

  p {
    padding-bottom: 20px;
  }

  fieldset {
    display: flex;
    flex-direction: column;

    input {
      height: 35px;
      margin: 5px 0;
      padding: 0 10px;
    }

    a {
      width: 170px;
      margin-top: 30px;
      padding: 10px 0;
      background-color: black;
      color: white;
      text-align: center;
    }
  }
`

const Section3 = () => {
    return (
        <Section3container>
            <div id='contact'>
                <h3>Contact</h3>
            </div>
            <hr/>
            <p>Lets get in touch and talk about your next project.</p>
            <fieldset>
                <input type='text' placeholder='Name' id='name'/>
                <input type='email' placeholder='Email' id='email'/>
                <input type='text' placeholder='Subject' id='subject'/>
                <input type='text' placeholder='Comment' id='comment'/>
                <a href='#name'>SEND MESSAGE</a>
            </fieldset>
        </Section3container>
    );
};

export default Section3;