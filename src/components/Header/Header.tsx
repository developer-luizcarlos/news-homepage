/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Image from "next/image"
import { MouseEventHandler } from "react"

interface HeaderInterface {
    eventClick?: MouseEventHandler;
}

export default function Header(props: HeaderInterface) {
    return (
        <header className="w-full h-24">
            <div className="w-[95%] h-full py-10 flex items-center justify-between m-auto md:w-[80%]">
                <Link href="/">
                    <Image
                        width={100}
                        height={100}
                        src="./assets/images/logo.svg"
                        alt="logo"
                    />
                </Link>
                <ul className="hidden md:flex md:items-center md:justify-center md:gap-3">
                    <Link href="/" className="capitalize text-darkGrayishBlue font-medium hover:text-softRed hover:duration-200 hover:ease-in-out">Home</Link>
                    <Link href="/new" className="capitalize text-darkGrayishBlue font-medium hover:text-softRed hover:duration-200 hover:ease-in-out">New</Link>
                    <Link href="/popular" className="capitalize text-darkGrayishBlue font-medium hover:text-softRed hover:duration-200 hover:ease-in-out">Popular</Link>
                    <Link href="/trending" className="capitalize text-darkGrayishBlue font-medium hover:text-softRed hover:duration-200 hover:ease-in-out">Trending</Link>
                    <Link href="/categories" className="capitalize text-darkGrayishBlue font-medium hover:text-softRed hover:duration-200 hover:ease-in-out">Categories</Link>
                </ul>
                <button className="md:hidden" onClick={props.eventClick}>
                    <Image
                        width={50}
                        height={50}
                        src="./assets/images/icon-menu.svg"
                        alt="open menu"
                    />
                </button>
            </div>
        </header>
    )
}