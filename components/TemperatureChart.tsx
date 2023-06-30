'use client'
import { Card,AreaChart,Title } from '@tremor/react';
import React from 'react'
type Props={
    results: Root;
}
const TemperatureChart = ({results}:Props) => {
 const hourly = results?.hourly.time.map(time=>
    new Date(time).toLocaleString('en-US',{
        hour:"numeric",
        hour12:false,
    })
 ).slice(0,24);
 console.log(hourly);
 const data = hourly.map((hour,i)=>({
    'time':Number(hour),
    'UVIndex':results.hourly.uv_index[i],
    'Temperature (C)': results.hourly.temperature_2m[i],
 }));
 const dataFormatter = (number:number)=> `${number} °C`;
  return (
    <Card className='mt-4 bg-white rounded-md shadow-lg ring-white'>
        <Title>Temperature & UV Index</Title>
        <AreaChart
        className='mt-6'
        data={data}
        showLegend
        index='time'
        categories={['Temperature (C)','UVIndex']}
        minValue={0}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
        colors={['blue','blue']}
        showGridLines={true}
        style={{
            stroke:`red`,
        }}
        ></AreaChart>
    </Card>
  )
}

export default TemperatureChart
