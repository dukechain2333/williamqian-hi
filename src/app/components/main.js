export default function Main({children}) {
    return (
        <main className="flex flex-col items-center justify-center align-middle w-screen h-screen overflow-hidden bg-gradient-to-tl from-black to-red-950">
            {children}
        </main>
    )
}