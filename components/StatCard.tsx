'use client'
import React from 'react'
import {Card,Color,Metric,Text} from '@tremor/react';
type Props={
    title:string;
    metric:string;
    color?:Color;
}
const StatCard = ({title,metric,color}:Props) => {
  return (
    <Card className='mt-4 bg-white rounded-md shadow-lg ring-white' decoration='top' decorationColor={color}
    style={{
        borderTopColor:color,
    }}
    >
        <Text className='text-sm text-gray-900/50'>{title}</Text>
        <Metric className='text-xl'>{metric}</Metric>
    </Card>
  )
}

export default StatCard
