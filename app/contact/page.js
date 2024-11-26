"use client";

import Header from "@/components/Header";
import { Suspense } from "react";
import config from "@/config";

export const dynamic = "force-dynamic";

import { useState } from "react";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default function Dashboard() {

  const [user, setUser] = useState(null);


  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <section className="flex flex-col lg:flex-row items-center justify-center px-12 py-20 lg:py-20 lg:px-20 background-image">
          <div className="flex flex-col gap-4 lg:gap-8 items-center self-stretch text-center w-1200 text-white">
            <h1 className="text-4xl lg:text-7xl tracking-tight text-center">
              Reach us
            </h1>
            <p className="text-lg lg:text-xl w-3/4">
              Explain to us your problems and book a call so we can discuss the
              best way to make your life easier.
            </p>
            <div
              className="w-full max-w-2xl bg-transparent border border-cyan-800/20 rounded-lg"
              style={{ backgroundColor: config.colors.background }}
            >
              <div className="p-6 space-y-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 text-left">
                      <label
                        htmlFor="firstName"
                        className="text-cyan-50 uppercase text-xs block"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                           focus:ring-teal-500 focus:border-transparent"
                        value={user?.firstName}
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <label
                        htmlFor="email"
                        className="text-cyan-50 uppercase text-xs block"
                      >
                        Business Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                           focus:ring-teal-500 focus:border-transparent"
                        value={user?.email}
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <label
                        htmlFor="company"
                        className="text-cyan-50 uppercase text-xs block"
                      >
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                           focus:ring-teal-500 focus:border-transparent"
                        value={user?.company}
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <label
                        htmlFor="phone"
                        className="text-cyan-50 uppercase text-xs block"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                           focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 text-left">
                    <label
                      htmlFor="size"
                      className="text-cyan-50 uppercase text-xs block"
                    >
                      Company Size
                    </label>
                    <select
                      id="size"
                      className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                         text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500 
                         focus:border-transparent"
                    >
                      <option value="" disabled selected>
                        Select company size
                      </option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501+">501+ employees</option>
                    </select>
                  </div>
                  <div className="space-y-2 text-left">
                    <label
                      htmlFor="description"
                      className="text-cyan-50 uppercase text-xs block"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      placeholder="Tell us about your needs"
                      className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                         text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                         focus:ring-teal-500 focus:border-transparent min-h-[120px]"
                    />
                  </div>
                  <button
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md 
                       transition-colors duration-200 focus:outline-none focus:ring-2 
                       focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 
                       disabled:cursor-not-allowed"
                  >
                    Book a call
                  </button>
                </form>
              </div>
            </div>
          </div>{" "}
        </section>
      </main>
    </>
  );
}
