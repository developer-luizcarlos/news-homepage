/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import Header from "@/components/Header/Header"
import Link from "next/link"
import { useState } from "react"
import lastNewsComponent from "@/components/LastNews/LastNews"
import mainNewsComponent from "@/components/MainNews/MainNews"


export default function Home() {

  const [displayMenu, setDisplayMenu] = useState<boolean>(false);

  return (
    <div className="w-dvw h-dvh bg-offWhite overflow-x-hidden z-0">
      <Header
        eventClick={() => setDisplayMenu(true)}
      />
      <div className="w-[95%] m-auto py-8 flex flex-col gap-7 md:w-[80%] md:flex-row">
        <section className="flex flex-col justify-between  gap-6 md:h-full">
          <img src="./assets/images/image-web-3-desktop.jpg" alt="" className="w-full h-80 object-cover" />
          <article className="w-full text-justify flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
            <div className="w-full">
              <h1 className="text-veryDarkBlue font-bold text-5xl">The Bright <br />Future of Web 3.0?
              </h1>
            </div>
            <div className="w-full h-full flex flex-col gap-4">
              <p className="font-medium text-base text-darkGrayishBlue text-justify">We dive into the next evolution of the web that <br />claims to put the power of the platforms back<br /> into the hands of the people. But is it really<br />fulfilling its promise?</p>

              <Link href="/" role="button" className="w-40 h-11 flex items-center justify-center bg-softRed text-veryDarkBlue font-semibold text-lg uppercase cursor-pointer hover:bg-veryDarkBlue hover:text-offWhite hover:duration-700 hover:ease-in-out">read more</Link>
            </div>
          </article>
        </section>
        <aside className="w-full p-5 bg-veryDarkBlue flex flex-col gap-4 md:w-[370px]">
          <h1 className="capitalize text-softOrange font-bold text-3xl">new</h1>

          <div className="flex flex-col gap-2">
            {lastNewsComponent}
          </div>
        </aside>
      </div>
      <div className="w-[95%] flex flex-col gap-6 m-auto md:flex-row md:w-[80%]">
        {mainNewsComponent}
      </div>
      <div className="absolute top-0 left-0 w-dvw h-dvh z-10 grid grid-cols-2" style={{ display: displayMenu ? "block" : "none" }}>
        <div className="absolute top-0 left-0 w-dvw h-dvh bg-slate-800 opacity-40"></div>
        <aside className="absolute top-0 right-0 w-80 h-dvh bg-white z-50 p-4 flex flex-col gap-10">
          <div className="w-full flex items-center justify-end py-3 px-2">
            <img src="./assets/images/icon-menu-close.svg" alt="" className="cursor-pointer" onClick={() => setDisplayMenu(false)} />
          </div>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="capitalize text-darkGrayishBlue text-2xl font-medium hover:text-softRed hover:duration-200 hover:ease-in-out">home</Link>
            <Link href="/" className="capitalize text-darkGrayishBlue text-2xl font-medium hover:text-softRed hover:duration-200 hover:ease-in-out">new</Link>
            <Link href="/" className="capitalize text-darkGrayishBlue text-2xl font-medium hover:text-softRed hover:duration-200 hover:ease-in-out">popular</Link>
            <Link href="/" className="capitalize text-darkGrayishBlue text-2xl font-medium hover:text-softRed hover:duration-200 hover:ease-in-out">trending</Link>
            <Link href="/" className="capitalize text-darkGrayishBlue text-2xl font-medium hover:text-softRed hover:duration-200 hover:ease-in-out">categories</Link>
          </nav>
        </aside>
      </div>
    </div>
  )
}