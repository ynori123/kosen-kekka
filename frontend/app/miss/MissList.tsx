"use client";
import React from 'react'
import { MissCard } from '@/app/miss/MissCard';

export const MissList = ({misses}: {misses: {subject: string, date: string, missed: number}[]}) => {
  
  if (!misses || misses.length === 0) {
    return (
      <div className="flex flex-wrap">
        <h2 className="text-gray-900 text-lg title-font font-medium">欠課がありません！素晴らしい！！！</h2>
      </div>
    )
  }else {
    return (
      <>
        {misses.map((miss, index) => (
          <MissCard keyProp={index} miss={miss} key={index}/>
        ))}
      </>
    )
  }
}
