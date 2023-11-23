"use client";
import { useRouter } from 'next/navigation';
import { destroyCookie } from 'nookies';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      await destroyCookie(null, 'token');
      // cookie削除を全体に反映
      window.location.href = "/";
      
    };

    logout();
  }, []); 

  return <div>ログアウトできたよ．</div>;
}
