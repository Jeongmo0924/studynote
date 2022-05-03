import React from 'react';
import styled from 'styled-components';

const Section1container = styled.div`
  div#project {
    padding: 65px 0 0 0;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    li {
      max-width: 375px;
      flex: 1 1 auto;

      div {
        position: relative;
        padding-bottom: 20px;

        img {
          width: 96%;
        }

        p {
          position: absolute;
          top: 0;
          color: white;
          background-color: black;
          display: block;
          width: fit-content;
          padding: 10px 15px 10px 15px;
        }
      }
    }
  }
`


const Section1 = (props) => {
    return (
        <Section1container>
            <div id='project'>
            <h3>Projects</h3>
            </div>
            <hr/>
            <ul>
                {props.data.map((v, i) => {
                    return (<li>
                        <div>
                            <img src={v.img} alt={v.subject}/>
                            <p>{v.subject}</p>
                        </div>
                    </li>)
                })}
            </ul>
        </Section1container>
    );
};

export default Section1;