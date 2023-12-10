"use client"
import React from 'react'

// 利用規約
export default function Page() {
  return (
    <section className="text-gray-600 w-10/12 mx-auto body-font relative border-2 my-2">
      <h1 className="sm:text-3xl text-2xl title-font mb-4 text-gray-900 font-bold text-center">利用規約</h1>

      <section className="mb-8 text-left">
        <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">第1条（適用）</h2>
        <p className="leading-relaxed text-base">本規約は、本サービスの利用条件を定めるものです。</p>
      </section>

      <section className="mb-8 text-left">
        <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">第2条（利用登録）</h2>
        <p className="leading-relaxed text-base">本サービスの利用を希望する者は、本規約に同意の上、本サービスの定める方法によって利用登録を申請し、本サービスの承認を受けるものとします。</p>
      </section>

      <section className="mb-8 text-left">
        <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">第3条（ユーザーIDおよびパスワードの管理）</h2>
        <p className="leading-relaxed text-base">ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを管理するものとします。</p>
        <p className="leading-relaxed text-base">ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与することはできません。</p>
        <p className="leading-relaxed text-base">本サービスは、ユーザーIDおよびパスワードの盗用によって生じた損害について、一切の責任を負わないものとします。</p>
      </section>

      <section className="mb-8 text-left">
        <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">第4条（禁止事項）</h2>
        <p className="leading-relaxed text-base">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
        <ul className="list-decimal ml-10">
          <li>法令または公序良俗に違反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>本サービスのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
          <li>本サービスのサービスの運営を妨害するおそれのある行為</li>
          <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
          <li>他のユーザーに成りすます行為</li>
          <li>本サービスのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
          <li>その他、本サービスが不適切と判断する行為</li>
        </ul>
      </section>

      <section className="mb-8 text-left">
        <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">第5条（本サービスの提供の停止等）</h2>
        <p className="leading-relaxed text-base">本サービスは、以下の場合には、事前の通知なく本サービスの提供を停止または中断することができるものとします。</p>
        <ul className="list-decimal ml-10">
          <li>本サービスのサーバーまたはネットワークの保守を行う場合</li>
          <li>火災、停電、地震、天災地変等の不可抗力により、本サービスの提供ができなくなった場合</li>
          <li>その他、本サービスが停止または中断する必要があると判断した場合</li>
        </ul>
        <p className="leading-relaxed text-base">本サービスは、本サービスの提供の停止または中断により、ユーザーまたは第三者が被った損害について、一切の責任を負わないものとします。</p>
      </section>

      <section className="mb-8 text-left">
        <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">第6条（利用制限および登録抹消）</h2>
        <p className="leading-relaxed text-base">本サービスは、以下の場合には、事前の通知なく、ユーザーに対して本サービスの全部または一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。</p>
        <ul className="list-decimal ml-10">
          <li>本規約のいずれかの条項に違反した場合</li>
          <li>その他、本サービスが本サービスの利用を適当でないと判断した場合</li>
        </ul>
        <p className="leading-relaxed text-base">本サービスは、本条に基づき本サービスが行った行為によりユーザーに生じた損害について、一切の責任を負わないものとします。</p>
      </section>

      <section className="mb-8 text-left">
        <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">第7条（免責事項）</h2>
        <p className="leading-relaxed text-base">本サービスの債務不履行責任は、本サービスの故意または重過失によらない場合には免責されるものとします。</p>
        <p className="leading-relaxed text-base">本サービスは、本サービスに関してユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負わないものとします。</p>
      </section>

      <section className="mb-8 text-left">
        <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">第8条（サービス内容の変更等）</h2>
        <p className="leading-relaxed text-base">本サービスは、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとします。</p>
        <p className="leading-relaxed text-base">本サービスは、本サービスの内容の変更または本サービスの提供の中止によりユーザーに生じた損害について、一切の責任を負わないものとします。</p>
      </section>

      <section className="mb-8 text-left">
        <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">第9条（利用規約の変更）</h2>
        <p className="leading-relaxed text-base">本サービスは、本規約を変更できるものとします。</p>
        <p className="leading-relaxed text-base">本サービスは、本規約を変更した場合には、本サービスの定める方法により、ユーザーに通知するものとします。</p>
      </section>

      <section className="mb-8 text-left">
        <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">第10条（通知または連絡）</h2>
        <p className="leading-relaxed text-base">ユーザーと本サービスとの間の通知または連絡は、本サービスの定める方法によって行うものとします。</p>
      </section>

      <section className="mb-8 text-left">
        <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">第11条（権利義務の譲渡の禁止）</h2>
        <p className="leading-relaxed text-base">ユーザーは、本サービスの事前の承諾なく、利用契約上の地位または本規約に基づく権利または義務について、第三者に対して、譲渡、移転、担保設定その他の処分をすることはできません。</p>
      </section>

      <section className="mb-8 text-left">
        <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">第12条（準拠法・裁判管轄）</h2>
        <p className="leading-relaxed text-base">本規約の解釈にあたっては、日本法を準拠法とします。</p>
        <p className="leading-relaxed text-base">本サービスに関して紛争が生じた場合には、本サービスの所在地を管轄する裁判所を専属的合意管轄とします。</p>
      </section>

      <section className="mb-8 text-left">
        <h2 className="text-lg text-gray-900 font-semibold title-font mb-4 text-center">附則</h2>
        <p className="leading-relaxed text-base">本規約は、2024年1月1日から施行します。</p>
      </section>

    </section>
  )
}
