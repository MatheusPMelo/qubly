import logos_circles from '../assets/logos_circles.png'
import { Tag } from './Tag'
import { BiGitRepoForked } from 'react-icons/bi'

export function Teams() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid gap-x-20 grid-cols-2">
                <div className="flex align-center justify-center">
                    <img src={logos_circles} alt="logos em um circulo" />
                </div>
                <div className="flex align-center flex-col my-auto gap-y-6">
                    <Tag
                        title='For Product Teams'
                        icon={<BiGitRepoForked />}
                    />
                    <h1 className='font-bold text-title'>Launch with the best stack</h1>
                    <p className='text-base opacity-40 w-3/5 2xl:w-full'>A centralized platform that integrates zillions of data sources using Big Data ELT (Extract, Load & Transform) that leaves no data behind</p>
                </div>
            </div>
        </section>
    )
}