'use client'
import { Card,AreaChart,Title } from '@tremor/react';
import React from 'react'
type Props={
    results: Root;
}
const HumidityChart = ({results}:Props) => {
 const hourly = results?.hourly.time.map(time=>
    new Date(time).toLocaleString('en-US',{
        hour:"numeric",
        hour12:false,
    })
 ).slice(0,24);
 console.log(hourly);
 const data = hourly.map((hour,i)=>({
    'time':Number(hour),
    'Humidity (%)': results.hourly.relativehumidity_2m[i],
 }));
 const dataFormatter = (number:number)=> `${number} %`;
  return (
    <Card className='mt-4 bg-white/75 rounded-md shadow-lg ring-white'>
        <Title>Humidity</Title>
        <AreaChart
        className='mt-6'
        data={data}
        showLegend
        index='time'
        categories={['Humidity (%)']}
        minValue={0}
        maxValue={100}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
        colors={['blue']}
        showGridLines={true}
        style={{
            stroke:`green`,
        }}
        ></AreaChart>
    </Card>
  )
}

export default HumidityChart
