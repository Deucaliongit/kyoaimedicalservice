import React from "react";

const Revere = () => {
  return (
    <div className="w-full">
      <div className="w-full py-8 mx-auto bg-sky-500">
        <div className="max-w-[1080px] mx-auto my-4 px-8 py-2 items-center font-bold sm:text-lg md:text-3xl text-xl text-left text-white">
          <h1>Medical Checkup Flow</h1>
          <p className="text-sm py-5 max-w-lg">健診の流れ</p>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto py-5">
        <div className="bg-white shadow-md my-4 px-4 md:mx-2 mx-4 py-4 rounded-md flex items-center space-x-4">
          <div className="font-semibold sm:text-lg md:text-sm text-xs flex flex-cols-2 text-gray-600 w-full">
            <div className="text-left text-lg fw-bold">
              健康診断申し込みフォーム
            </div>
          </div>
        </div>
        <div className="rounded-md md:mx-2 mx-4 py-2 bg-sky-500">
          <div className="my-4 px-4 mx-2 block items-center space-x-4 text-sm font-bold text-white  ">
            健康診断は平日と土曜の午前中受け付けております。祝日、予約が既に埋まった日に申し込みの場合、日程の変更のお願いをする場合がございます。土曜は混み合っていますのであらかじめご了承ください。予約は5営業日前までにお願いします。
            【ご登録いただきました個人情報は、患者様の医療及びその対応のために使用いたします】
          </div>
          <div className="my-4 px-4 mx-2 block items-center space-x-4 text-sm">
            <form>
              <div className="w-full md:flex md:flex-cols-3 mx-auto md:space-x-8">
                <label class="block md:w-[250px] my-4">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                    第1希望日
                  </span>
                  <input
                    type="date"
                    name="date1"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="you@example.com"
                  />
                </label>
                <label class="block md:w-[250px] my-4">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                    第2希望日
                  </span>
                  <input
                    type="date"
                    name="date2"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="you@example.com"
                  />
                </label>
                <label class="block md:w-[250px] my-4">
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                    第3希望日
                  </span>
                  <input
                    type="date"
                    name="date3"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label class="block mb-4">
                <span class="block text-sm font-medium text-white">国籍</span>
                <input
                  type="text"
                  name="nationality"
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </label>
              <label class="block my-4">
                <span class="block text-sm font-medium text-white">名前</span>
                <input
                  type="text"
                  name="nationality"
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </label>
              <label class="block my-4">
                <span class="block text-sm font-medium text-white">
                  名前 (アルファベット)
                </span>
                <input
                  type="text"
                  name="nationality"
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </label>
              <label class="block my-4">
                <span class="block text-sm font-medium text-white">
                  生年月日
                </span>
                <input
                  type="date"
                  name="nationality"
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </label>
              <label class="block my-4">
                <span class="block text-sm font-medium text-white">
                  自宅住所
                </span>
                <textarea class="resize mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"></textarea>
              </label>
              <label class="block my-4">
                <span class="block text-sm font-medium text-white">
                  自宅または携帯 電話番号
                </span>
                <input
                  type="text"
                  name="nationality"
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </label>
              <label class="block my-4">
                <span class="block text-sm font-medium text-white">Email</span>
                <input
                  type="email "
                  name="nationality"
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revere;
