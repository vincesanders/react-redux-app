import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../actions';

export default () => {
    const getData = useDispatch();
    const [days, setDays] = useState(7);
    const handleChange = (e) => {
        setDays(e.target.value)
    }
    return (
        <div>
            <h1>Pick a Currency</h1>
            <h3>How many days of historical pricing do you want to see?</h3>
            <input onChange={handleChange} type='number' placeholder='How many days of pricing data?' value={days} />
            <button onClick={() => getData(fetchData(days))}>usd/jpy</button>
        </div>
    )
}