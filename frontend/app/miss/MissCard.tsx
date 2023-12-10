import Link from 'next/link';
import React from 'react'

type MissCardProps = {
  keyProp: number;
  miss: { id: string; subject: string; date: string; time: number };
};

export const MissCard: React.FC<MissCardProps> = ({keyProp, miss}) => {
  return (
    <Link href={`/miss/${miss.id}`} key={keyProp} className="flex flex-wrap">
      <div className="p-2 m-2 w-full">
        <div className="flex rounded-lg h-full bg-gray-100 p-4 hover:bg-gray-300">
          <div className="flex items-center mb-3 my-auto w-1/3">
            <h2 className="text-gray-900 text-lg title-font font-medium">{miss.subject}</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">欠課時数: <span className='font-bold'>{miss.time}</span></p>
            <p className="leading-relaxed text-base">欠課日: <span className='text-bold'>{miss.date}</span></p>
          </div>
        </div>
      </div>
    </Link>
  )
}
