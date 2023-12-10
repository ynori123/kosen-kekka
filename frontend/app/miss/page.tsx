"use client";
import React, { useEffect, useState } from 'react';
import { MissList } from '@/app/miss/MissList';
import { parseCookies } from 'nookies';

export default function Page() {
  const cookies: { [token: string]: string; } = parseCookies();
  const [misses, setMisses] = useState<[{subject: string, date: string, missed: number}]>([{subject: "", date: "", missed: 0}]);
  useEffect(() => {
    if (!cookies.token) {
      window.location.href = "/";
    }
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/misses/all?token=${cookies.token}`);
        const data = await res.json();
        console.log(data);
        if (data.code === 0) {
          // 認証成功
          setMisses(data?.misses?.miss);
        }else{
          // 認証エラー
          console.log("エラーが発生しました: ");
        }
      } catch (err) {
        console.log("エラーが発生しました: ", err);
      }
      
    }
    fetchData();
  }, [])
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">欠課一覧</h1>
          <MissList misses={misses}/>
        </div>
      </div>
    </section>
  )
}
