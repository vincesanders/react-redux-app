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
import { dateFormatter } from '../utils';

export default () => {
    const [data, days, isLoading] = useSelector(state => [state.data, state.days, state.isLoading]);
    const formattedData = [];
    let min = 10000;
    let max = 0;
    
    if (data) {
        for (let i = 0; i < days; i++) {
            formattedData.push({value: data.historical[i].close, date: data.historical[i].date});
            if (data.historical[i].close < min) {
                min = data.historical[i].close;
            }
            if (data.historical[i].close > max) {
                max = data.historical[i].close;
            }
        }
    }
    formattedData.reverse();
    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${dateFormatter(label)} : ${payload[0].value}`}</p>
            </div>
          );
        }
      
        return null;
      };

    return (
        <div className="chart-container">
            {!data && !isLoading && (<h2>Select a currency</h2>)}
            {isLoading && (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)}
            {data && 
                <LineChart width={800} height={300} data={formattedData}>
                    <Line dot={false} dataKey="value" stroke="#d88383" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="date" interval={Math.round(days / (days / 10))} />
                    <YAxis domain={[min, max]} />
                    <Tooltip content={<CustomTooltip />} />
                </LineChart>
            }
        </div>
    );
}