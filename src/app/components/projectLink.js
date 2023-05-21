import Link from "next/link";
import {Eye, View} from "lucide-react";

export const ProjectLink = () => {
    return (
        <Link href="/">
            <article className="p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center">
					<span
                        className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange mb-2">
						{new Date().toISOString()}
					</span>
                    <span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4"/>{" "}
                        1000
					</span>
                </div>
                <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    Test Title is here check it
                </h2>
                <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    Test Description Test Description Test Description Test Description Test Description Test Description Test Description
                </p>
            </article>
        </Link>
    );
};