

import React, { useState } from "react";
import qb from '../assets/quickbooks.svg';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import up from '../assets/up.svg';
import InputBox from "./InputBox";
import Carousel from "./Carousel";
interface RightPanelProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const RightPanel: React.FC<RightPanelProps> = () => {
  const [paymentStatus, setPaymentStatus] = useState("paid");
  const [lineItem, setLineItem] = useState("single");
  const [details, setDetails] = useState("")



  const handlePayment = (name: string) => {
    if (name === details) setDetails("");
    else setDetails(name);
  }
  const handleDetail = (name: string) => {
    if (name === details) setDetails("");
    else setDetails(name);
  }

  return (
    <aside className="max-h-screen overflow-auto w-[20rem] bg-white p-4">
      <div className="flex flex-col gap-4 border border-gray p-2 mb-4">
        <div className="flex justify-between">
          <div className="flex gap-1 justify-between">
            <div className="rounded-full">
              <img src={qb} alt="" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-1">Quickbook</h2>
              <div className="text-xs text-gray-500">
                <p>
                  16 June, 2024 •
                </p>
                <p>
                  8:15 PM
                </p>

              </div>
            </div>
          </div>
          <div className="">
            <p className="text-sm text-gray-500 text-end mb-1">Publishing...</p>
            <p className="text-sm text-gray-500 text-end">Jimmy Jason</p>
          </div>
        </div>

        <div className="flex justify-evenly items-center mb-4">
          <label className="flex items-center space-x-1">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-sm">Auto-sync</span>
          </label>
          <label className="flex items-center space-x-1">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-sm">Save Config</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <button className="w-full py-2 bg-purple-500 text-white rounded">View Line Items</button>
      </div>

      <div className="p-4 rounded-lg mb-4">
        <div className="flex justify-between mb-4">

          <div className="">
            <img src={left} alt="" />
          </div>
          <h3 className="text-sm font-semibold ">Payment Details</h3>
          <div className="">
            <img src={right} alt="" />
          </div>
        </div>
        <hr />
        <details>
          <summary className="flex justify-between items-center" onClick={() => handlePayment("pay")}>
            <h3 className="text-sm font-[500] my-4">Payment Details</h3>

            <div className={`transition-all duration-5000
              ease-in-out ${details === "pay" ? "rotate-0" : "rotate-180"}`}>
              <img src={up} alt="" />
            </div>
          </summary>
          <div className="flex items-center space-x-4 mt-2">
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                checked={paymentStatus === "paid"}
                onChange={() => setPaymentStatus("paid")}
              />
              <span className="text-sm">Paid</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                checked={paymentStatus === "unpaid"}
                onChange={() => setPaymentStatus("unpaid")}
              />
              <span className="text-sm">Unpaid</span>
            </label>
          </div>


          <div className="mt-2 space-y-2">
            <InputBox name="Bill Number" placeholder="Bill Number" />
            <InputBox name="Bill Date" placeholder="Start Typing" />
            <InputBox name="Paid Amount" placeholder="£ 1900.00" />
            <InputBox name="Paid Date" placeholder="Start Typing" />
            <InputBox name="Due Date" placeholder="Start Typing" />
            <label htmlFor="" className="text-gray-500 mt-2 mb-4 text-sm">Payment Mode</label>
            <select className="w-full border-none rounded text-sm focus:outline-none">
              <option className="text-sm">Select Payment Mode</option>
            </select>
            <hr />
            <label htmlFor="" className="text-gray-500 mt-2 mb-4 text-sm">Select Currency</label>
            <select className="w-full border-none rounded text-sm focus:outline-none">
              <option>Select Currency</option>
            </select>
          </div>

        </details>

      </div>

      <details className="px-4 rounded-lg mb-4">
        <summary className="flex justify-between items-center" onClick={() => handleDetail("des")}>
          <h3 className="text-sm font-[500] my-4">Description</h3>

          <div className={`transition-all duration-5000
              ease-in-out ${details === "des" ? "rotate-0" : "rotate-180"}`}>
            <img src={up} alt="" />
          </div>
        </summary>
        <div className="flex items-center space-x-4 mt-2">
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              checked={lineItem === "single"}
              onChange={() => setLineItem("single")}
            />
            <span>Single</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              checked={lineItem === "multiple"}
              onChange={() => setLineItem("multiple")}
            />
            <span>Multiple</span>
          </label>
        </div>
        <textarea className="w-full p-2 border rounded mt-2" placeholder="Enter Description"></textarea>
      </details>
      <hr />

      <Carousel items={["Slide 1", "Slide 2"]} />

      <hr />
      <div className="flex flex-col gap-1 mt-4">
        <button className="px-4 py-2 bg-gray-300 rounded">Save</button>
        <button className="px-4 py-2 bg-purple-500 text-white rounded">Publish</button>
      </div>
    </aside>
  );
};

export default RightPanel;


