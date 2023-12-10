"use client";
import { useParams } from 'next/navigation';
import { parseCookies } from 'nookies';
import React, { useEffect, useRef, useState } from 'react';
import { AuthToken } from '@/services/AuthToken';

export default function Page() {
  const params = useParams();
  const cookies = parseCookies();
  const id = params.id;
  console.log(params)
  const [miss, setMiss] = useState<{id: string, subject: string, date: string, time: number, memo: string}>({id: "", subject: "", date: "", time: 0, memo: ""});
  const effectRan = useRef(false);
  useEffect(() => {
    const authenticate = async () => {
      const isAuthed = await AuthToken(cookies.token);
      if (isAuthed === false) {
        // 認証エラー
        window.location.href = "/";
      }else{
        if (effectRan.current === false) {
          const fetchData = async () => {
            try {
              const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/miss/${id}?token=${cookies.token}&id=${id}`);
              const data = await res.json();
              console.log(data);
              if (data.code === 0) {
                // 認証成功
                setMiss(data?.miss);
              }else{
                // 認証エラー
                console.log("エラーが発生しました: ");
              }
            } catch (err) {
              console.log("エラーが発生しました: ", err);
            }
          }
          fetchData();
        }
        
      }
    }
    authenticate();
  }
  , [id]);

  const handleDateChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMiss((prevData) => ({
      ...prevData,
      date: e.target.value,
    }));
  }
  const handleMemoChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMiss((prevData) => ({
      ...prevData,
      memo: e.target.value,
    }));
  }
  const handleSubmit = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/miss/${id}?token=${cookies.token}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(miss),
      });
      const data: {code: number, miss: {id: string, subject: string, date: string, missed: number, memo: string}} = await response.json() || {code: 0, miss: {id: "", subject: "", date: "", missed: 0, memo: ""}};
      if (data?.code === 0){
        window.location.href = "/miss";
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  const missTimes = useRef(["1限遅刻", "1限欠席", "1限欠席+1限遅刻", "2限欠席"]);
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">欠課登録フォーム</h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">教科</label>
                <select name="subjects" className="w-full h-9 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  <option key={1}>{miss.subject}</option>
                </select>       
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">日付</label>
                <input type="date" id="date" name="date" value={miss.date} onChange={handleDateChanged} className="w-full h-9 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">遅刻した長さ</label>
                <select name="missTimes" className="w-full h-9 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  {missTimes.current.map((miss) => {
                    return <option key={miss}>{miss}</option>;
                  })}
                </select>       
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">メモ</label>
                <textarea id="message" name="message" value={miss.memo} onChange={handleMemoChanged} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className="pl-4 w-1/2 mt-5">
              <button onClick={handleSubmit} className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">修正する</button>
            </div>
            <div className="pr-4 w-1/2 mt-5">
              <button onClick={handleSubmit} className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg">元に戻す</button>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  )
}
