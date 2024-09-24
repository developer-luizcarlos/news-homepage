/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { mainNews } from "@/Data/Data";

const mainNewsComponent = mainNews.map((element: any) => {
    return <div key={element.id} className="grid grid-cols-2 gap-2 h-60 overflow-hidden my-4">
      <img src={element.image} alt="image" className="w-40 h-full object-cover md:w-full" />
      <div className="h-full flex flex-col justify-around gap-1">
        <h2 className="text-4xl text-softRed font-semibold md:text-3xl">
          {element.id < 10 ? "0" + element.id : element.id}
        </h2>
        <Link href={"/" + element.title} className="text-2xl font-extrabold md:text-xl hover:text-softRed hover:duration-500 hover:ease-in-out">
          {element.title}
        </Link>
        <p className="text-lg font-normal text-darkGrayishBlue text-justify md:text-base">
          {element.resume}
        </p>
      </div>
    </div>
  })

  export default mainNewsComponent