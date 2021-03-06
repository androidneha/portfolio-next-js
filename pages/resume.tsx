import { languages, tools } from "../data";

import Bar from '../components/Bar'

const resume = () => {
    return (
        <div className='px-6 py-2 dark:bg-dark-300 dark:bg-black-500 dark:text-white'>
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">
                            Computer Science Engineering
                        </h5>
                        <p className="font-semibold">Academy of Technology (2017-2021)</p>
                        <p className="my-3">
                            I am currently pursuing B.tech in Computer Science Engineering
                            from Academy of Technology
                        </p>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
                        <p className="font-semibold">Tata Consultancy Services</p>
                        <p className="my-3">I don&apos;t know why I am doing this job</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-6 mg:grid-cols-2'>
                <div>
                    <h5 className='my-3 text-2xl font-bold'> Languages & Framework</h5>
                    <div className='my-2'>
                        {languages.map(language =>
                        <Bar value={language} key={language.name}/>
                        )}
                    </div>
                </div>
            </div>
            <div className='grid grid-6 mg:grid-cols-2'>
                <div>
                    <h5 className='my-3 text-2xl font-bold'> Tools & Software</h5>
                    <div className='my-2'>
                        {tools.map(tool =>
                            <Bar value={tool} key={tool.name}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default resume