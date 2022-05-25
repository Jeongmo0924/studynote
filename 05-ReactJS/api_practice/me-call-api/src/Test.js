import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {userList} from './slices/UserSlice';

const Test = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.users);

    React.useEffect(() => {
        dispatch(userList('karn'));
    },[dispatch])

    
    console.log(data);
    return (
        loading ? "loading..." : (
            error ? JSON.stringify(error) : (
                <>
                    <h1>Id</h1>
                    {data&&data.map((v, i) => {
                        return (
                            <p>id: {v.id}, fname: {v.fname}, lname: {v.lname}, username: {v.username}, avatar: {v.avatar}</p>
                        )
                    })}
                </>
            )
        )
    );
};

export default Test;