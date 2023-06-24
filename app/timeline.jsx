const IpoTimeline = () => {
  return (
    <div className="flex items-center justify-center">
      <ol className="relative border-l border-slate-200">
        <li className="mb-10 ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-slate-200"></div>
          <div className="flex flex-row items-center space-x-2 justify-between">
            <h3 className="text-base font-semibold text-gray-900">
              IPO Opening Date
            </h3>
            <p className="text-center  font-normal text-gray-500">
              6 Jun 2023 .
            </p>
          </div>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-slate-200"></div>
          <div className="flex flex-row items-center  space-x-2 justify-between ">
            <h3 className="text-base font-semibold text-zinc-800">
              IPO Closing Date
            </h3>
            <p className="text-center  font-normal text-gray-600">
              8 Jun 2023 .
            </p>
          </div>
        </li>

        <li className="mb-10 ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-emerald-500"></div>
          <div className="flex flex-row items-center space-x-2 justify-between">
            <h3 className="text-base font-semibold text-gray-900">
              Basis Of Allotment
            </h3>
            <p className="text-center  font-normal text-gray-500">
              14 Jun 2023 .
            </p>
          </div>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-orange-500"></div>
          <div className="flex flex-row items-center space-x-2 justify-between">
            <h3 className="text-base font-semibold text-gray-900 break-words w-[145px] ">
              Credit of Shares to Demat Account
            </h3>
            <p className="text-center  font-normal text-gray-500">
              14 Jun 2023 .
            </p>
          </div>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-emerald-500"></div>
          <div className="flex flex-row items-center space-x-2 justify-between group">
            <h3 className="text-base font-semibold text-gray-900 group-hover:underline group-hover:decoration-sky-500  underline-offset-2 ">
              Listing Date
            </h3>
            <p className="text-center  font-normal text-gray-500 group-hover:underline group-hover:decoration-sky-500  underline-offset-2">
              6 Jun 2023 .
            </p>
          </div>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full  border border-white bg-slate-200 "></div>
          <div className="flex flex-row items-center space-x-2 justify-between">
            <h3 className="text-base font-semibold text-gray-900 capitalize ">
              UPI mandate expiry date
            </h3>
            <p className="text-center  font-normal text-gray-500">
              8 Jun 2023 .
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default IpoTimeline;
