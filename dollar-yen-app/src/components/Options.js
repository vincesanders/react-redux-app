import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../actions';

export default () => {
    const getData = useDispatch();
    return (
        <div>
            <h1>Pick a Currency</h1>
            <button onClick={() => getData(fetchData())}>usd/jpy</button>
        </div>
    )
}