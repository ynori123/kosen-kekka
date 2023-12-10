"use client";
import { useParams } from 'next/navigation';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const params = useParams();
  const cookies = parseCookies();
  const id = params.id;
  const [miss, setMiss] = useState<{id: string, subject: string, date: string, missed: number}>({id: "", subject: "", date: "", missed: 0});
  useEffect(() => {
    const authenticate = async () => {
      const isAuthed = await AuthToken(cookies.token);
      if (isAuthed === false) {
        // 認証エラー
        window.location.href = "/";
      }else{
        const fetchData = async () => {
          try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/miss/${id}?token=${cookies.token}&id=${id}`);
            const data = await res.json();
            console.log(data);
            if (data.code === 0) {
              // 認証成功
              setMiss(data?.misses);
            }else{
              // 認証エラー
              console.log("エラーが発生しました: ");
            }
          } catch (err) {
            console.log("エラーが発生しました: ", err);
          }
          
        }
      }
    }
    authenticate();
  }
  , [id]);
  return (
    <div>

    </div>
  )
}
