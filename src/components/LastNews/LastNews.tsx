/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { lastNews } from "@/Data/Data";

const lastNewsComponent = lastNews.map((element: any) => {
    return <div key={element.title} className="flex flex-col gap-2 py-5 border-b-2 border-grayishBlue last:border-0 last:pt-4">
        <Link href="/" role="title" className="font-bold text-2xl text-offWhite hover:text-softOrange hover:duration-700 hover:ease-in-out">{element.title}</Link>
        <p className="text-grayishBlue text-base font-medium text-justify">
            {element.resume}
        </p>
    </div>
})

export default lastNewsComponent;