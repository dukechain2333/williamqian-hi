import Card from "@/app/components/card";
import Main from "@/app/components/main";

export default function Home() {
    return (
        <Main>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <h1 className="z-10 text-4xl 2xl:text-8xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-mono sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text">
                William Qian
            </h1>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

            <span className="lg:mx-0 2xl:w-1/2 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-2 w-auto my-8 animate-fade-in text-center text-gray-600 font-mono">
                Hi, my name is William Qian, and this is my welcome page. On this page you can find my introduction,
                my blog, and my projects from GitHub. Hope you enjoy my website!
            </span>

            <div className="grid 2xl:w-1/2 xl:w-2/3 lg:w-2/3 md:w-2/3 md:grid-cols-3 mb-32 text-center lg:mb-0 lg:grid-cols-3 lg:text-left animate-fade-in">
                <Card name="About" href="/about"/>
                <Card name="Blog" href="https://blog.williamq.me"/>
                <Card name="Projects" href="/projects"/>
            </div>
        </Main>
    )
}
