import connection from '../assets/trilha_logos.png'
import { Tag } from './Tag'
import {FaDraftingCompass} from 'react-icons/fa'

export function Engineering() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-2">
                <div className="grid place-items-center md:place-items-start flex-col my-auto gap-y-6">
                    <Tag
                        title='For Engineering Teams'
                        icon={<FaDraftingCompass />}
                    />
                    <h1 className='font-bold text-title md:text-start text-center'>Data-driven pipelines in minutes</h1>
                    <p className='text-base opacity-40 text-center md:text-start w-10/12 md:w-5/6 2xl:w-full'>Maintenance-free data pipelines with quick set-up and straight-forward deployments that are powered by a modern & scalable platform.</p>
                </div>
                <div className="md:flex align-center justify-center hidden">
                    <img data-testid="logo" src={connection} alt="logos interligados" />
                </div>
            </div>
        </section>
    )
}