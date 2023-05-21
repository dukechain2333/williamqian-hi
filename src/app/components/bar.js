import Link from "next/link";

export default function Bar() {
    return (
        <div className="xl:w-1/3 lg:w-1/2 sm:w-full fixed md:align-middle bottom-0 left-0 right-0 lg:top-0 lg:left-1/4 lg:right-1/4 xl:top-0 xl:left-1/3 xl:right-1/3 h-20 bg-opacity-30 backdrop-blur-xl text-white grid grid-cols-3 px-2 font-mono">
            <div className="flex items-center">
                <Link href={"/"} className="text-left"><span>&lt;-</span> Home</Link>
            </div>
            <div className="col-span-2 grid grid-cols-2 items-center">
                <Link href={"/projects"} className="text-right">Projects <span>-&gt;</span></Link>
                <Link href={"/about"} className="text-right">About <span>-&gt;</span></Link>
            </div>
        </div>
    )
}