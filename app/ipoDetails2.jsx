const ipoDetails2 = () => {
  return (
    <div className=" max-w-sm ">
      <h2 className="text-zinc-800 text-3xl font-semibold  py-3 ">
        ipo Details & Timeline{" "}
      </h2>
      {/* border border-slate-200 divide-y  divide-gray-200*/}
      <table className=" table-auto w-full">
        <tbody className="divide-y  divide-gray-200">
          <tr>
            <th scope="row" className=" px-6 py-2 text-left text-zinc-800 ">
              IPO Date
            </th>
            <td className="py-2">6 to 8 Jun 2023</td>
          </tr>
          <tr className=" bg-slate-50 ">
            <th scope="row" className=" px-6 py-2 text-left text-zinc-800">
              Listing Date
            </th>
            <td>16 Jun 2023</td>
          </tr>
          <tr>
            <th scope="row" className=" px-6 py-2 text-left text-zinc-800">
              Face Value
            </th>
            <td>₹10 per share</td>
          </tr>
          <tr className=" bg-slate-50 ">
            <th scope="row" className=" px-6 py-2 text-left text-zinc-800">
              Price
            </th>
            <td>₹275 to ₹285</td>
          </tr>
          <tr>
            <th scope="row" className=" px-6 py-2 text-left text-zinc-800">
              Lot Size
            </th>
            <td>52 Share</td>
          </tr>
          <tr className=" bg-slate-50 ">
            <th scope="row" className=" px-6 py-2 text-left text-zinc-800">
              Total Issue Sihe
            </th>
            <td>
              21,280,701 shares <br />
              ₹606.50 Cr
            </td>
          </tr>
          <tr>
            <th scope="row" className=" px-6 py-2 text-left text-zinc-800">
              Fresh Issue
            </th>
            <td>
              12,280,701 shares <br />
              ₹350.00 Cr
            </td>
          </tr>
          <tr className=" bg-slate-50 ">
            <th scope="row" className=" px-6 py-2 text-left text-zinc-800">
              Offer for Sale
            </th>
            <td>
              9,000,000 shares <br />
              ₹256.50 Cr
            </td>
          </tr>
          <tr>
            <th scope="row" className=" px-6 py-2 text-left text-zinc-800">
              Issue Type
            </th>
            <td>Book Built Issue IPO</td>
          </tr>
          <tr className=" bg-slate-50 ">
            <th scope="row" className=" px-6 py-2 text-left text-zinc-800">
              Listing At
            </th>
            <td>Nse Bse</td>
          </tr>
          <tr>
            <th scope="row" className=" px-6 py-2 text-left text-zinc-800">
              Share Holding Pre Issue
            </th>
            <td>65,000,000</td>
          </tr>
          <tr className=" bg-slate-50 ">
            <th scope="row" className=" px-6 py-2 text-left text-zinc-800">
              Share Holding Post Issue
            </th>
            <td>77,280,701</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ipoDetails2;
