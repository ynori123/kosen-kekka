import React from 'react'
import { MissList } from '@/app/miss/MissList'

export default function Page() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">欠課登録フォーム</h1>
          <MissList />
        </div>
      </div>
    </section>
  )
}
