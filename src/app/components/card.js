import Link from "next/link";

export default function Card(props) {
    return (
        <div
            className="group justify-center rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link href={props.href} className="flex flex-row justify-center pt-2 pb-2 text-gray-600">
                <div className="mb-3 text-1xl font-mono">
                    {props.name}{''}
                </div>
                <div
                    className="inline-block transition-transform duration-300 group-hover:translate-x-5 motion-reduce:transform-none">
                    -&gt;
                </div>
            </Link>
        </div>
    )
}