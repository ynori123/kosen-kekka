"use client";
import React from 'react'
import Link from 'next/link';
import Icon from "public/icon.svg";
import { parseCookies } from 'nookies';

export const Header = () => {
  const cookies: { [token: string]: string; } = parseCookies();
  return (
    <header className="text-gray-600 body-font">
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Icon className='w-10 h-10' />
          <h1 className='ml-3 text-xl hover:text-gray-700 font-bold'>欠課マン</h1>
        </Link>
        
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
          <Link href="/miss" className="mr-5 hover:text-gray-900 hover:font-medium">欠課一覧</Link>
          <Link href="/subject" className="mr-5 hover:text-gray-900 hover:font-medium">教科別</Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900 hover:font-medium">お問い合わせ</Link>
        </nav>
        {/* TODO hydration-errorの解消 */}
        {cookies.token ?  
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link href="/logout" className="mr-5 hover:text-gray-900 hover:font-medium">ログアウト</Link>
        </nav>
        : 
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link href="/signup" className="mr-5 hover:text-gray-900 hover:font-medium">登録</Link>
          <Link href="/login" className="mr-5 hover:text-gray-900 hover:font-medium">ログイン</Link>
        </nav>}
        
        <Link href="https://syllabus.kosen-k.go.jp/Pages/PublicDepartments?school_id=28&lang=ja">
          <button className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 hover:font-semibold rounded text-base mt-4 md:mt-0">
            シラバス
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  )
}
