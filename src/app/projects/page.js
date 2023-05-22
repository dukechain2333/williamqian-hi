'use client';
import Content from "@/app/components/content";
import Bar from "@/app/components/bar";
import {ProjectCard} from "@/app/components/projectCard";
import {ProjectLink} from "@/app/components/projectLink";
import useSWR from "swr";

export default function Page() {
    const fetcher = url => fetch(url).then(res => res.json())
    const {data, error} = useSWR('https://api.github.com/users/dukechain2333/repos', fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return (
        <Content>
            <Bar/>
            <div
                className="mt-28 mb-10 2xl:w-1/2 2xl:left-auto 2xl:right-auto xl:w-2/3 xl:left-auto xl:right-auto lg:w-full lg:left-auto lg:right-auto sm:w-full px-5">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-mono">
                        Projects
                    </h2>
                    <p className="mt-4 text-zinc-400 font-mono">
                        Those are my projects from GitHub.
                    </p>
                </div>
            </div>

            <div className="w-full h-px bg-zinc-800"/>

            <div
                className="flex px-5 mt-10 2xl:w-1/2 2xl:left-auto 2xl:right-auto xl:w-2/3 xl:left-auto xl:right-auto lg:w-full lg:left-auto lg:right-auto sm:w-full">
                <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
                    <div className="grid grid-cols-1 gap-4">
                        {sortedData
                            .filter((_, i) => i % 3 === 0)
                            .map((project, index) => (
                                <ProjectCard key={project.id}>
                                    <ProjectLink href={project.html_url} date={project.created_at} title={project.name}
                                                 stars={project.stargazers_count} description={project.description}/>
                                </ProjectCard>
                            ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {sortedData
                            .filter((_, i) => i % 3 === 1)
                            .map((project, index) => (
                                <ProjectCard key={project.id}>
                                    <ProjectLink href={project.html_url} date={project.created_at} title={project.name}
                                                 stars={project.stargazers_count} description={project.description}/>
                                </ProjectCard>
                            ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {sortedData
                            .filter((_, i) => i % 3 === 2)
                            .map((project, index) => (
                                <ProjectCard key={project.id}>
                                    <ProjectLink href={project.html_url} date={project.created_at} title={project.name}
                                                 stars={project.stargazers_count} description={project.description}/>
                                </ProjectCard>
                            ))}
                    </div>
                </div>
            </div>
            <div className="h-28"></div>
        </Content>
    )
}