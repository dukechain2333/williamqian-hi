import Main from "@/app/components/main";
import Content from "@/app/components/content";
import Bar from "@/app/components/bar";
import {ProjectCard} from "@/app/components/projectCard";
import {ProjectLink} from "@/app/components/projectLink";

export default function Page() {
    const sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
    return (
        <Content>
            <Bar/>
            <div className="mt-28 mb-10 2xl:w-1/2 2xl:left-auto 2xl:right-auto xl:w-2/3 xl:left-auto xl:right-auto lg:w-2/3 lg:left-auto lg:right-auto sm:w-full px-5">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Projects
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Some of the projects are from work and some are on my own time.
                    </p>
                </div>
            </div>

            <div className="w-full h-px bg-zinc-800"/>

            <div className="flex px-5 mt-10 2xl:w-1/2 2xl:left-auto 2xl:right-auto xl:w-2/3 xl:left-auto xl:right-auto lg:w-2/3 lg:left-auto lg:right-auto sm:w-full">
                <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                            .filter((_, i) => i % 3 === 0)
                            .map((project, index) => (
                                <ProjectCard key={index}>
                                    <ProjectLink/>
                                </ProjectCard>
                            ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                            .filter((_, i) => i % 3 === 1)
                            .map((project, index) => (
                                <ProjectCard key={index}>
                                    <ProjectLink/>
                                </ProjectCard>
                            ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                            .filter((_, i) => i % 3 === 2)
                            .map((project, index) => (
                                <ProjectCard key={index}>
                                    <ProjectLink/>
                                </ProjectCard>
                            ))}
                    </div>
                </div>
            </div>
            <div className="h-28"></div>
        </Content>
    )
}