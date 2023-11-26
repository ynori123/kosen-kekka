"use client";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [missItems, setmissItems] = useState<{ subject: string; missTime: number; totalTime: number;}[]>([]);
  const [missRatio, setMissRatio] = useState<string[]>([]);
  const effectRan = useRef(false)
  useEffect(() => {
    const cookies: { [token: string]: string } = parseCookies();
    
    if (!cookies.token) {
      router.push("/login");
      return;
    }
  
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/misses/?token=${cookies.token}`);
        const data = await res.json();
        console.log(data);
        if (data?.code === 1) {
          alert("エラーが発生しました");
          return;
        }
        const misses: [{ subject: string; missTime: number; totalTime: number }] = await data?.misses?.miss || [];
        setmissItems(misses);
  
        let missRatioArray = [];
        for (let i = 0; i < misses.length; i++) {
          missRatioArray.push(`${Math.floor(misses[i].missTime / (misses[i].totalTime / 3) * 100)}%`);
        }
        setMissRatio(missRatioArray);
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchData();
  
    return () => {
      console.log("unmounted");
      effectRan.current = true;
    };
  }, []);
  
  return (
    <>
      <div className="mx-auto">
        <h1 className="lg:text-3xl md:text-xl text-center font-sans font-bold px-auto">あなたの現状(欠課時数消化率)</h1>
      </div>
      <section className='mx-auto container md:w-full lg:w-1/3 px-1'>
        {missItems.map((missItem, index) => (
          <div className="flex items-center mt-4" key={index}>
          <p className="text-xs md:text-sm font-medium text-slate-600hover:underline w-4/12 text-right">{missItem.subject}</p>
          <div className="w-full lg:h-7 md:h-5 h-5 lg:mx-3 mx-1 bg-gray-200 rounded">
            <div 
            className={`lg:h-7 md:h-5 h-5 rounded text-right px-0.5 my-auto 
            ${parseInt(missRatio[index]) > 70 ? 
            "bg-red-500": parseInt(missRatio[index]) > 40 ? 
            "bg-yellow-300" : "bg-green-600"}`} 
            style={{width: missRatio[index]}}>
              <p className="text-sm lg:h-7 h-5 mg:py-1 py-0.5">
              あと{missItem.totalTime / 3 - missItem.missTime}
              </p>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-500">{missRatio[index]}</span>
        </div>
        ))}
      </section>
    </>
  )
}
