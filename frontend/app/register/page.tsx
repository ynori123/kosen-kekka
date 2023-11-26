"use client";
import { parseCookies } from 'nookies';
import React, { useEffect, useRef, useState } from 'react'

export default function Page() {
  const [subjects, setSubjects] = useState<string[]>([]);
  const [missedSubjects, setMissedSubjects] = useState<{subject: string, total: number, missed: number}>({subject: "", total: 0, missed: 0});
  const [canSubmit, setCanSubmit] = useState(false);
  const [date, setDate] = useState('');
  const missTimes = useRef(["1限遅刻", "1限欠席", "1限欠席+1限遅刻", "2限欠席"])

  const [memo, setMemo] = useState('');
  const cookies: { [token: string]: string; } = parseCookies();
  useEffect(() => {
    const today = new Date();
    setDate(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`);
    const fetchSubjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/subjects?token=${cookies.token}`);
        const data = await res.json();
        console.log(data);
        if (data.code === 0) {
          setSubjects(data.subjects);
        }else{
          alert("エラーが発生しました．");
          window.location.href = "/";
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchSubjects();
  }, []);

  const handleDateChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  }
  const handleMemoChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
  }
  const handleSubmit = async () => {
    if (canSubmit === true) {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/misses?token=${cookies.token}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            subject: missedSubjects.subject,
            date: date,
            memo: memo,
          }),
        });
        const data = await res.json();
        console.log(data);
        if (data.code === 0) {
          alert("欠課登録が完了しました．");
          window.location.href = "/";
        }else{
          alert("エラーが発生しました．");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">欠課登録フォーム</h1>
          </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto h-1/12">
          {(!canSubmit) && <p className='text-red-700 font-bold p-2'>必須項目が入力されていません．</p>}
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">教科</label>
                <select name="subjects" className="w-full h-9 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  {subjects.map((subject) => {
                    return <option key={subject}>{subject}</option>;
                  })}
                </select>       
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">日付</label>
                <input type="date" id="date" name="date" value={date} onChange={handleDateChanged} className="w-full h-9 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                <textarea id="message" name="message" value={memo} onChange={handleMemoChanged} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
          </div>
          <div className="p-2 w-full">
            <button onClick={handleSubmit} className="flex mx-auto text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg">送信</button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}