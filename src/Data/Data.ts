interface LastNews {
    title: string;
    resume: string;
}

interface MainNews {
    id: number;
    image: string;
    title: string;
    resume: string;
}

const lastNews: LastNews[] = [
    { title: "Hydrogen VS Eletric Cars", resume: "Will hydrogen-fueled cars ever catch up to EVs?" },
    { title: "The Downsides of AI Aristry", resume: "What are the possible adverse effects of on-demand AI image generation?" },
    { title: "Is VC Funding Drying Up?", resume: "Private funding by VC firms is down 50% YOY. We take a look at what that means." }
]

const mainNews: MainNews[] = [{
    id: 1,
    image: "/assets/images/image-retro-pcs.jpg",
    title: "Reviving Retro PCs",
    resume: "What happens when old PCs are given modern upgrades?"
},
{
    id: 2,
    image: "/assets/images/image-top-laptops.jpg",
    title: "Top 10 Laptops of 2024",
    resume: "Our best picks for various needs and budgets"
},
{
    id: 3,
    image: "/assets/images/image-gaming-growth.jpg",
    title: "The Growth of Gaming",
    resume: "How the pandemic has sparkedd fresh opportunities."
}
];

export {lastNews, mainNews}