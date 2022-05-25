import React from "react";
import styled from "styled-components";
import NewsItem from "../components/NewsItem";
import Spinner from "../components/Spinner";

import {useSelector, useDispatch} from 'react-redux';
import {getList} from '../slices/newsSlice';

const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

const NewsList = () => {
    React.useEffect(() => console.clear(),[]);

    const {data, loading, error} = useSelector((state) => state.news);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getList());
    }, [dispatch]);

    return (
        <div>
            <Spinner visible={loading} />
            {error ? (
                <div>
                    <h1>Oops!!~ {error.code} Error.</h1>
                    <hr />
                    <p> {error.message} </p>
                </div>
            ) : (
                <div>
                <h1>EXAM12 - news</h1>
                    <hr/>
                <ListContainer>
                    {data && data.map((v, i) => (
                        <NewsItem key={i} item={v} />
                    ))}
                </ListContainer>
                </div>
            )}

        </div>
    );
};

export default NewsList;
