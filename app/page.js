import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col sm:flex-row">
          <div
            className={`border-2 sm:mx-auto  overflow-auto max-w-4xl   bg-white p-6 shadow-2xl 	 antialiased border-white mt-60 rounded-lg ${roboto.className} `}
          >
            <div className=" align-middle rounded-lg overflow-auto">
              <table className="w-full  table-auto divide-y divide-gray-200 ">
                <thead className=" bg-indigo-300    ">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xl  font-medium "
                    >
                      Issuer Company
                    </th>
                    <th className="px-6 py-3 text-left text-xl  font-medium ">
                      Open
                    </th>
                    <th className="px-6 py-3 text-left text-xl  font-medium ">
                      Close
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200 ">
                  <tr className="hover:bg-slate-100">
                    <td className="px-6 py-4 whitespace-nowrap   ">
                      Tata Technologies
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"></td>
                    <td className="px-6 py-4 whitespace-nowrap"></td>
                  </tr>
                  <tr className="hover:bg-slate-100">
                    <td className="px-6 py-4 whitespace-nowrap">
                      IKIO Lighting
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">6 Jun</td>
                    <td className="px-6 py-4 whitespace-nowrap">8 Jun</td>
                  </tr>
                  <tr className=" hover:bg-slate-100">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Nexus Select Trust REIT
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">9 May</td>
                    <td className="px-6 py-4 whitespace-nowrap">11 May</td>
                  </tr>
                  <tr className=" hover:bg-slate-100 ">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Mankind Pharma
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 25 Apr </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 27 Apr</td>
                  </tr>
                  <tr className=" hover:bg-slate-100 ">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Avalon Technologies
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 3 Apr</td>
                    <td className="px-6 py-4 whitespace-nowrap"> 6 Apr</td>
                  </tr>
                  <tr className=" hover:bg-slate-100 ">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Udayshivakumar Infra
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 20 Mar </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 23 Mar</td>
                  </tr>
                  <tr className=" hover:bg-slate-100 ">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Global Surfaces
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 20 Mar </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 23 Mar</td>
                  </tr>
                  <tr className=" hover:bg-slate-100 ">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Divgi TorqTransfer Systems
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 20 Mar </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 23 Mar</td>
                  </tr>
                  <tr className=" hover:bg-slate-100 transition duration-100 ease-in-out ">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Sah Polymers
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 20 Mar </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 23 Mar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* seconf */}
      <div className="max-w-7xl font-black mx-auto ">
        <div>
          <div
            className={`border-2  sm:mx-auto  overflow-auto max-w-2xl   bg-white p-6 shadow-2xl 	 antialiased border-white mt-60 rounded-lg ${roboto.className} `}
          >
            <div className=" border border-gray-200 p-4  align-middle rounded-lg overflow-auto">
              <h1 className=" w-full text-4xl px-6 py-4 rounded-xl align-center bg-indigo-300  ">
                IPO 2023 List
              </h1>
              <hr className=" w-full  bg-gray-200 " />
              <table className="w-full  mt-3 table-auto divide-y divide-gray-200 ">
                <thead className=" ">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xl  font-medium "
                    >
                      Issuer Company
                    </th>
                    <th className="px-6 py-3 text-left text-xl  font-medium ">
                      Open
                    </th>
                    <th className="px-6 py-3 text-left text-xl  font-medium ">
                      Close
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200 ">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap   ">
                      Tata Technologies
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"></td>
                    <td className="px-6 py-4 whitespace-nowrap"></td>
                  </tr>
                  <tr className="bg-slate-100">
                    <td className="px-6 py-4 whitespace-nowrap">
                      IKIO Lighting
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">6 Jun</td>
                    <td className="px-6 py-4 whitespace-nowrap">8 Jun</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Nexus Select Trust REIT
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">9 May</td>
                    <td className="px-6 py-4 whitespace-nowrap">11 May</td>
                  </tr>
                  <tr className=" bg-slate-100 ">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Mankind Pharma
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 25 Apr </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 27 Apr</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Avalon Technologies
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 3 Apr</td>
                    <td className="px-6 py-4 whitespace-nowrap"> 6 Apr</td>
                  </tr>
                  <tr className=" bg-slate-100 ">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Udayshivakumar Infra
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 20 Mar </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 23 Mar</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Global Surfaces
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 20 Mar </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 23 Mar</td>
                  </tr>
                  <tr className=" bg-slate-100 ">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Divgi TorqTransfer Systems
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 20 Mar </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 23 Mar</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Sah Polymers
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 20 Mar </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 23 Mar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl font-black mx-auto ">
        <div>
          <div
            className={`border-2  sm:mx-auto  overflow-auto max-w-2xl   bg-white p-6 shadow-2xl 	 antialiased border-white mt-60 rounded-lg ${roboto.className} `}
          >
            <div className=" border border-gray-200 p-4  align-middle rounded-lg overflow-auto">
              <h1 className=" w-full text-4xl px-6 py-4 rounded-xl align-center bg-slate-200  ">
                IPO 2023 List
              </h1>
              <hr className=" w-full  bg-gray-200 " />
              <table className="w-full  mt-3 table-auto divide-y divide-gray-200 ">
                <thead className=" ">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xl  font-medium "
                    >
                      Issuer Company
                    </th>
                    <th className="px-6 py-3 text-left text-xl  font-medium ">
                      Open
                    </th>
                    <th className="px-6 py-3 text-left text-xl  font-medium ">
                      Close
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200 ">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap   ">
                      Tata Technologies
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"></td>
                    <td className="px-6 py-4 whitespace-nowrap"></td>
                  </tr>
                  <tr className="bg-slate-100">
                    <td className="px-6 py-4 whitespace-nowrap">
                      IKIO Lighting
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">6 Jun</td>
                    <td className="px-6 py-4 whitespace-nowrap">8 Jun</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Nexus Select Trust REIT
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">9 May</td>
                    <td className="px-6 py-4 whitespace-nowrap">11 May</td>
                  </tr>
                  <tr className=" bg-slate-100 ">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Mankind Pharma
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 25 Apr </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 27 Apr</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Avalon Technologies
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 3 Apr</td>
                    <td className="px-6 py-4 whitespace-nowrap"> 6 Apr</td>
                  </tr>
                  <tr className=" bg-slate-100 ">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Udayshivakumar Infra
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 20 Mar </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 23 Mar</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Global Surfaces
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 20 Mar </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 23 Mar</td>
                  </tr>
                  <tr className=" bg-slate-100 ">
                    <td className="px-6 py-4 whitespace-nowrap">
                      Divgi TorqTransfer Systems
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 20 Mar </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 23 Mar</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Sah Polymers
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 20 Mar </td>
                    <td className="px-6 py-4 whitespace-nowrap"> 23 Mar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
