import Link from "next/link";

export default function Bar() {
    return (
        <div
            className="z-50 w-full bottom-0 left-0 right-0 flex justify-center bg-opacity-30 backdrop-blur-xl fixed 2xl:top-0 xl:top-0 lg:top-0 md:bottom-0 h-20 md:border-t-[1px] md:border-t-zinc-800 border-t-[1px] border-t-zinc-800 lg:border-b-[1px] lg:border-b-zinc-800 xl:border-b-[1px] xl:border-b-zinc-800 2xl:border-b-[1px] 2xl:border-b-zinc-800">
            <div
                className="2xl:w-1/2 2xl:left-auto 2xl:right-auto xl:w-2/3 xl:left-auto xl:right-auto lg:w-full lg:left-auto lg:right-auto md:w-full md:align-middle text-white grid grid-cols-3 px-2 font-mono">
                <div className="flex items-center">
                    <Link href={"/"} className="text-left hover:text-gray-600 group"><span>&lt;-</span> Home</Link>
                </div>
                <div className="col-span-2 grid grid-cols-2 items-center">
                    <Link href={"/projects"}
                          className="text-right hover:text-gray-600">Projects <span>-&gt;</span></Link>
                    <Link href={"/about"} className="text-right hover:text-gray-600">About <span>-&gt;</span></Link>
                </div>
            </div>
        </div>
    )
}