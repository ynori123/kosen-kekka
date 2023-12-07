import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react'

export const MissList = () => {
  const cookies: { [token: string]: string; } = parseCookies();
  const [misses, setMisses] = useState<{subject: string, date: string, missed: number}>({subject: "", date: "", missed: 0});
  useEffect(() => {
    if (!cookies.token) {
      window.location.href = "/";
    }
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/misses?token=${cookies.token}`);
        const data = await res.json();
        // console.log(data);
        if (data.code === 1) {
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
    <div>
      
    </div>
  )
}
