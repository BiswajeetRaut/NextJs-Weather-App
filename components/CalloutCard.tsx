'use client'
import React from 'react'
import { CheckCircleIcon,ExclamationCircleIcon } from '@heroicons/react/solid';
import { Callout } from '@tremor/react';
type Props={
    message:string,
    warning?: boolean, 
};
const CalloutCard = ({ message, warning}: Props) => {
  const calssname = 'mt-4 bg-teal-100/30 rounded-md'
//   + warning?'text-green-900 border-0':'text-red-900';
  return (
    <div>
      <Callout
        className={calssname}
        title={message}
        icon={warning?ExclamationCircleIcon:CheckCircleIcon}
        color={warning?"red":"green"}
        style={{borderLeftColor:warning?'red':'green',
        color:warning?'red':'teal',
        // maxHeight:`100px`,
        fontSize:`15px`
    }}
      ></Callout>
    </div>
  )
}

export default CalloutCard
