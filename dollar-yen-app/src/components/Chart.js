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
    const formattedData = [];
    let min = 10000;
    let max = 0;
    
    //                        data.historical.map((day, i) => {
    //     return {
    //         date: day.date,
    //         price: day.close
    //     }
    // });

    //Gets the last 7 days of prices
    if (data) {
        for (let i = 0; i < 7; i++) {
            formattedData.push({value: data.historical[i].close, date: data.historical[i].date});
            if (data.historical[i].close < min) {
                min = data.historical[i].close;
            }
            if (data.historical[i].close > max) {
                max = data.historical[i].close;
            }
        }
    }
    console.log(formattedData);
    return (
        <div>
            {!data && !isLoading && (<h2>Select a currency</h2>)}
            {isLoading && (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)}
            {data && 
                <LineChart width={1100} height={300} data={formattedData}>
                    <Line dataKey="value" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="date" interval={3} />
                    <YAxis domain={[min, max]} />
                    <Tooltip />
                </LineChart>
            }
        </div>
    );
}