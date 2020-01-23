import React from 'react';
import { useSelector } from 'react-redux';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
  } from "recharts";
import Loader from "react-loader-spinner";

export default () => {
    const [data, isLoading] = useSelector(state => [state.data, state.isLoading]);
    return (
        <div>
            {!data && !isLoading && (<h2>Select a currency</h2>)}
            {isLoading && (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)}
        </div>
    );
}