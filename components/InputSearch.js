/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useSession, signOut } from "next-auth/react";
import apiClient from "@/libs/api";

// A button to show user some account actions
//  1. Billing: open a Stripe Customer Portal to manage their billing (cancel subscription, update payment method, etc.).
//     You have to manually activate the Customer Portal in your Stripe Dashboard (https://dashboard.stripe.com/test/settings/billing/portal)
//     This is only available if the customer has a customerId (they made a purchase previously)
//  2. Logout: sign out and go back to homepage
// See more at https://shipfa.st/docs/components/buttonAccount
const InputSearch = ({datalist, dataId, btnName, callback}) => {
  // const { data: session, status } = useSession();
  // const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (callback) {
      const value = document.querySelector("input").value;
      callback(value);
    }
  };
  // input search with button search
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        list={dataId}
      />
      {datalist && (
        <datalist id={dataId}>
          {datalist.map((item, key) => (
            <option key={key} value={item}>{item}</option>
          ))}
        </datalist>
      
      )}
      <button
        onClick={handleSearch}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        {btnName}
      </button>
    </div>
  );
};

export default InputSearch;
