"use client";
import React, { useEffect, useState } from 'react'
import Icon from "public/icon.svg"
import { parseCookies, setCookie } from 'nookies';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    const cookies: { [token: string]: string; } = parseCookies();
    const checkCookie = () => {
      if (cookies.token){
        router.push("/");
      }
    }
    checkCookie();
  })

  interface FormData {
    email: string;
    password: string;
  }
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    // process.env.NEXT_PUBLIC_BACK_URL
    console.log(formData);
    const postData = async () => {
      try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/users/auth`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data: {code: number, token: string} = await response.json() || {code: 0, token: ""};
        if (data?.code === 0){
          setCookie(null, "token", data?.token, {maxAge: 30*24*60*60});
          window.location.reload();
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
    };
    postData();
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      password: e.target.value,
    }));
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Icon className='w-14 h-14 mx-auto'/>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            ログインしてくれ！！！
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
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
                <div className="text-sm">
                  <Link href="/forget" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    なんだい？ぱすわーどをわすれただって？？？
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder=' ●●●●●●●●●'
                  value={formData.password}
                  onChange={handleChangePassword}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
            あかうんとをもっていないだと？？！{' '}
            <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              あかうんとつくる
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
