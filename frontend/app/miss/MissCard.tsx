import React from 'react'

type MissCardProps = {
  key: number;
  miss: { subject: string; date: string; missed: number };
};

export const MissCard: React.FC<MissCardProps> = ({key, miss}) => {
  return (
    <div key={key} className="flex flex-wrap">
      <div className="p-2 m-2 w-full">
        <div className="flex rounded-lg h-full bg-gray-100 p-4">
          <div className="flex items-center mb-3 my-auto w-1/3">
            <h2 className="text-gray-900 text-lg title-font font-medium">{miss.subject}</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">欠課時数: <span className='font-bold'>{miss.missed}</span></p>
            <p className="leading-relaxed text-base">欠課日: <span className='text-bold'>{miss.date}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}