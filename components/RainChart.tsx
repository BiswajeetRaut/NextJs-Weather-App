'use client'
import { Card,AreaChart,Title } from '@tremor/react';
import React from 'react'
type Props={
    results: Root;
}
const RainChart = ({results}:Props) => {
 const hourly = results?.hourly.time.map(time=>
    new Date(time).toLocaleString('en-US',{
        hour:"numeric",
        hour12:false,
    })
 ).slice(0,24);
 console.log(hourly);
 const data = hourly.map((hour,i)=>({
    'time':Number(hour),
    'Rain %': results.hourly.precipitation_probability[i],
 }));
 const dataFormatter = (number:number)=> `${number} %`;
  return (
    <Card className='mt-4 bg-white rounded-md shadow-lg ring-white'>
        <Title>Chances of Rain</Title>
        <AreaChart
        className='mt-6'
        data={data}
        showLegend
        index='time'
        categories={['Rain %']}
        minValue={0}
        maxValue={100}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
        colors={['sky']}
        showGridLines={true}
        style={{
            stroke:`blue`,
        }}
        ></AreaChart>
    </Card>
  )
}

export default RainChart
