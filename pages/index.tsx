import type { NextPage } from "next"
import Link from "next/link"
import Container from "../components/Container"
import GithubTile from "../components/GithubTile"
import { CheckCircleIcon } from "@heroicons/react/solid"

const tools = [
    {
        name: "TypeScript v4.7",
        href: "https://www.typescriptlang.org/",
    },
    {
        name: "NextJS v12.2",
        href: "https://nextjs.org/",
    },
    {
        name: "Tailwind CSS v3.1",
        href: "https://tailwindcss.com/",
    },
    {
        name: "Headless UI v1.6",
        href: "https://headlessui.com/",
    },
]

const Home: NextPage = () => {
    return (
        <main className="w-min-screen h-min-screen m-auto">
            <Container className="my-8">
                <h1 className="text-gray-800 text-7xl font-extrabold tracking-wide">
                    Yeap, another NextJS template
                </h1>
                <br />
                <div className="flex gap-x-2 justify-start items-center">
                    <h4 className="text-gray-500 text-2xl">by Alan Mareines - </h4>
                    <GithubTile href="https://github.com/alanmareines" />
                </div>

                <div className="my-4">
                    <h4 className="text-2xl tracking-wide font-bold leading-relaxed">Tooling:</h4>
                    <ul>
                        {tools.map((tool, index) => (
                            <li key={index} className="text-lg flex items-center leading-9">
                                <>
                                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-2" />
                                    {tool.name} -
                                    <span className="text-blue-600 underline underline-offset-1 ml-1">
                                        <Link href={tool.href}>Link</Link>
                                    </span>
                                </>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </main>
    )
}

export default Home
