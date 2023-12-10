"use client";
import React, { useState } from 'react'
import Icon from "public/icon.svg"
import { setCookie } from 'nookies';
import { Alert } from '@/components/Alert';
import Link from 'next/link';

export default function Page() {
  interface FormData {
    email: string;
    password: string;
    passwordConfirm: string;
  }
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    passwordConfirm: ""
  });
  const [isError, setIsError] = useState(false);
  const [isAccept, setIsAccept] = useState(false);

  const handleSubmit = () => {
    // process.env.NEXT_PUBLIC_BACK_URL
    setIsError(false);
    // console.log(formData);
    const postData = async () => {
      try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data: {code: number, token: string} = await response.json() || {code: 0, token: ""};
        if (data?.code === 0){
          setCookie(null, "token", data?.token, {maxAge: 30*24*60*60});
          return {
            redirect: {
              permanent: true, // 永続的なリダイレクトかどうか
              destination: `${process.env.NEXT_PUBLIC_FRONT_URL}`
            }
          }
        }else{
          setIsError(true)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
    };
    postData();
  };
  const errorMessage = "めあどかぱすわーどがちゃいますわ"

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }));
    setIsError(false);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      password: e.target.value,
    }));
    setIsError(false);
  };

  const handleChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      passwordConfirm: e.target.value,
    }));
    setIsError(false);
  };

  const handleChangeIsAccept = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAccept(!isAccept);
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Icon className='w-14 h-14 mx-auto'/>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            あかうんと登録してくれ！！！
          </h2>
        </div>
        
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              {isError ? <Alert text="メールアドレスまたはパスワードが違います" /> : <></>}
              {isAccept ? <></> : <Alert text="プライバシー・ポリシーと利用規約に同意してください" />}
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                めあど
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder=' kekka-man@example.com'
                  value={formData.email}
                  onChange={handleChangeEmail}
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  ぱすわーど
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password1"
                  name="password1"
                  type="password"
                  placeholder=' ●●●●●●●●●'
                  value={formData.password}
                  onChange={handleChangePassword}
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="mt-3 block text-sm font-medium leading-6 text-gray-900">
                  ぱすわーど かくにんよう
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  placeholder=' ●●●●●●●●●'
                  value={formData.passwordConfirm}
                  onChange={handleChangePasswordConfirm}
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className='flex my-auto mt-4'>
                <input
                  id="accept"
                  name="accept"
                  type="checkbox"
                  checked={isAccept}
                  onChange={handleChangeIsAccept}
                  required
                />
                <label htmlFor="accept" className="ml-2 block text-sm font-medium leading-6 text-gray-900">
                  <Link href="/policy" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    プライバシーポリシー
                  </Link>と
                  <Link href="/terms" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    利用規約
                  </Link>に同意します。
                </label>
              </div>
            </div>

            <div>
              <button
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ろぐいん
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            あかうんとをもっているだと？？！{' '}
            <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              ろぐいん する
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
