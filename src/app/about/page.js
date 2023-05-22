import Bar from "@/app/components/bar";
import Content from "@/app/components/content";

export default function Page() {
    return (
        <Content>
            <Bar/>
            <div className="h-1/3 flex items-center justify-center mt-28">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ME.jpeg" alt="Me" className="lg:w-1/5 w-1/3 h-auto rounded-full"/>
            </div>
            <div className="2xl:w-1/2 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-full md:align-middle px-10 h-full">
                <h1 className="text-white font-mono font-bold text-xl my-10">Introduction</h1>
                <p className="text-white font-mono">
                    William Qian is a graduate student of Biostatistics at Brown University. He studied Data Science as
                    an undergraduate and believes his skills could be beneficial in public health.
                </p>
                <br/>
                <p className="text-white font-mono">
                    Although Mr. Qian is now studying Biostatistics, he spends a lot of time on programming. He is very
                    interested in developing applications and training deep learning models. Please do not forget that
                    this man spent 4 years time on studying Data Science, which is a subject that requires a lot of
                    programming and statistic skills. After several years of study, programming has already became part
                    of his life, and also became one of his hobbies.
                </p>
            </div>
            <div className="h-28"></div>
        </Content>
    )
}