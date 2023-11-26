"use client";
import React, { useState } from 'react'
import GithubIcon from "public/github.svg";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();
  const [approximation, setApproximation] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);

  const handleApproximationChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApproximation(e.target.value);
    handleCanSubmit();
  };
  const handleNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    handleCanSubmit();
  };
  const handleEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    handleCanSubmit();
  };
  const handleMessageChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    handleCanSubmit();
  };
  const handleSubmit = () => {
    console.log(canSubmit);
    if (canSubmit === true) {
      alert('お問い合わせありがとうございます');
      router.push('/');
      return;
    }
  };
  const handleCanSubmit = () => {
    console.log(canSubmit);
    console.log("approximation:",approximation,"\nname", name, "\nemail",email,"\nmessage", message);
    if (approximation === '' || name === '' || email === '' || message === '') {
      setCanSubmit(false);
    }else{
      setCanSubmit(true);
    }
  }
  return (
    <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-6 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">お問い合わせ</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">お問い合わせフォームです．</p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto h-1/12">
        {(!canSubmit) && <p className='text-red-700 font-bold p-2'>必須項目が入力されていません．</p>}
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">所属<span className='text-red-700 font-bold'>*</span></label>
              <input type="text" id="approximation" name="approximation" value={approximation} onChange={handleApproximationChanged} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">名前<span className='text-red-700 font-bold'>*</span></label>
              <input type="text" id="name" name="name" value={name} onChange={handleNameChanged} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email<span className='text-red-700 font-bold'>*</span></label>
              <input type="email" id="email" name="email" value={email} onChange={handleEmailChanged} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">メッセージ<span className='text-red-700 font-bold'>*</span></label>
              <textarea id="message" name="message" value={message} onChange={handleMessageChanged} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <button onClick={handleSubmit} className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg">送信</button>
          </div>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            {/* <a className="text-slate-800 font-bold">example@email.com</a> */}
            <p className="leading-normal my-5">NIT, Nara Computer Science<br />Se4weed
            </p>
            <span className="inline-flex">
              <span className='my-auto'>よろしければStar付けてください</span>
              <Link href="https://github.com/ynori123/kosen-kekka" className="text-gray-500 flex">
                <GithubIcon className='w-10 h-10 opacity-80 hover:opacity-100' />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
