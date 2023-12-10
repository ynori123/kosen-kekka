import React from 'react'

export const Alert = ({ text }: { text: string }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 text-xs px-4 py-3 my-2 rounded relative" role="alert">
      <strong className="font-bold">エラー</strong>
      <span className="block sm:inline">{text}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
      
      </span>
    </div>
  )
}
