/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header/Header"
import Link from "next/link"

interface LastNews {
  title: string,
  resume: string,
}

const lastNews: LastNews[] = [
  { title: "Hydrogen VS Eletric Cars", resume: "Will hydrogen-fueled cars ever catch up to EVs?" },
  { title: "The Downsides of AI Aristry", resume: "What are the possible adverse effects of on-demand AI image generation?" },
  { title: "Is VC Funding Drying Up?", resume: "Private funding by VC firms is down 50% YOY. We take a look at what that means." }
]

const lastNewsComponent = lastNews.map((element: any) => {
  return <div key={element.title}>
    <h2>{element.title}</h2>
  </div>
})

export default function Home() {
  return (
    <div className="w-screen h-screen bg-offWhite overflow-x-hidden">
      <Header />
      <div className="w-[95%] m-auto py-8 flex flex-col gap-7 md:w-[80%]">
        <section className="flex flex-col gap-4">
          <img src="/assets/images/image-web-3-desktop.jpg" alt="" className="w-full h-80 object-cover" />
          <article className="w-full text-justify flex flex-col gap-4">
            <h1 className="text-veryDarkBlue font-bold text-3xl">The Bright <br />Future of Web 3.0?
            </h1>
            <div className="w-full flex flex-col gap-4">
              <p className="font-medium text-base text-darkGrayishBlue text-justify">We dive into the next evolution of the web that <br />claims to put the power of the platforms back<br /> into the hands of the people. But is it really<br />fulfilling its promise?</p>

              <Link href="/" role="button" className="w-40 h-11 flex items-center justify-center bg-softRed text-veryDarkBlue font-semibold text-lg uppercase cursor-pointer">read more</Link>
            </div>
          </article>
        </section>
        <aside className="w-full p-7 bg-veryDarkBlue flex flex-col gap-6">
          <h1 className="capitalize text-softOrange font-bold text-3xl">new</h1>

          <div className="flex flex-col gap-2">

          </div>
        </aside>
      </div>
    </div>
  )
}