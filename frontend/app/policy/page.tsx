import React from 'react'

// プライバシー・ポリシー
export default function Page() {
  return (
    <section className="text-gray-600 w-10/12 mx-auto body-font relative border-2 my-2">
      <div className="container px-10 py-6">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl title-font mb-4 text-gray-900 font-bold">プライバシー・ポリシー</h1>
          <section className="mb-8 text-left">
            <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">個人情報の利用目的</h2>
            <p className="leading-relaxed text-base">本サービスでは、以下の利用目的のために個人情報を利用します。</p>
            <ul className="list-decimal ml-10">
              <li>ユーザーの本人確認</li>
              <li>ユーザーのログイン状態の管理</li>
              <li>ユーザーの課題の管理</li>
              <li>ユーザーの欠課の管理</li>
            </ul>
          </section>
          
          <section className="mb-8 text-left">
            <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">個人情報の第三者提供</h2>
            <p className="leading-relaxed text-base">本サービスでは、以下の場合を除き、個人情報を第三者に提供することはありません。</p>
            <ul className="list-decimal ml-10">
              <li>法令に基づく場合</li>
              <li>本人の同意がある場合</li>
              <li>本サービスの運営に必要な場合</li>
            </ul>
          </section>
          
          <section className="mb-8 text-left">
            <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">個人情報の開示</h2>
            <p className="leading-relaxed text-base">本サービスでは、以下の場合を除き、個人情報を開示することはありません。</p>
            <ul className="list-decimal ml-10">
              <li>法令に基づく場合</li>
              <li>本人の同意がある場合</li>
              <li>本サービスの運営に必要な場合</li>
            </ul>
          </section>

          <section className="mb-8 text-left">
            <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">個人情報の管理</h2>
            <p className="leading-relaxed text-base">本サービスでは、以下の個人情報を管理しています。</p>
            <ul className="list-decimal ml-10">
              <li>ユーザーのメールアドレス</li>
              <li>ユーザーのパスワード</li>
              <li>ユーザーの欠課</li>
            </ul>
          </section>

          <section className="mb-8 text-left">
            <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">個人情報の訂正・削除</h2>
            <p className="leading-relaxed text-base">本サービスでは、以下の場合を除き、個人情報の訂正・削除を行いません。</p>
            <ul className="list-decimal ml-10">
              <li>法令に基づく場合</li>
              <li>本人の同意がある場合</li>
              <li>本サービスの運営に必要な場合</li>
            </ul>
          </section>

          <section className="mb-8 text-left">
            <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">個人情報の利用停止</h2>
            <p className="leading-relaxed text-base">本サービスでは、以下の場合を除き、個人情報の利用停止を行いません。</p>
            <ul className="list-decimal ml-10">
              <li>法令に基づく場合</li>
              <li>本人の同意がある場合</li>
              <li>本サービスの運営に必要な場合</li>
            </ul>
          </section>

          <section className="text-left">
            <h2 className="text-lg text-gray-900 font-semibold title-font text-center">お問い合わせ</h2>
            <p className="leading-relaxed text-base">本サービスに関するお問い合わせは、お問い合わせフォームまでお願いします。</p>
          </section>
        </div>
      </div>
    </section>
  )
}
