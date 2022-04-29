import React from 'react';
import styled, { css } from 'styled-components';


const MC = styled.ul`
    list-style: none;
    padding: 10px;
    margin: 0;
    width: 1024px;
    border: 5px solid red;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const MI = styled.li`
    width: ${props => props.width};
`;

const MB = styled.div`
    border: 3px solid blue;
    background-color: gray;
    height: 100px;
    text-align: center;
    font-size: 20px;
    line-height: 100px;
    cursor: pointer;
    transition: all 0.2s ease-out;
    color: ${(props) => props.color || 'yellow'};
    &:hover {
        transform: scale(1.05, 1.05) rotate(-20deg);
        background-color: ${(props) => props.color || 'white'};
        color: white;
    }
`;


const SC = () => {
    const myColors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'pink'];
    const myWidth = 100 / myColors.length + '%';
    return (
        <div>
            <h2>SCSCSCSC</h2>
            <h3>scscsc</h3>
            <MC>
                <MI width={'20%'}>
                    <MB color={'red'}>ITEM1</MB>
                </MI>
                <MI width={'20%'}>
                    <MB color={'green'}>ITEM2</MB>
                </MI>
                <MI width={'20%'}>
                    <MB color={'orange'}>ITEM3</MB>
                </MI>
                <MI width={'20%'}>
                    <MB color={'blue'}>ITEM4</MB>
                </MI>
                <MI width={'20%'}>
                    <MB color={'green'}>ITEM5</MB>
                </MI>
            </MC>

            <MC>
                {myColors.map((v, i) => {
                    return(
                        <MI key={i} width={myWidth}>
                            <MB color={v} number={i}>
                                {v}
                            </MB>
                        </MI>
                    )
                })}
            </MC>
        </div>
    );
};

export default SC;