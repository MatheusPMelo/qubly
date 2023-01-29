import logoHeader from '../assets/clound-techs.png'
import { BsStars } from 'react-icons/bs'
import { Tag } from './Tag'

export function Header() {
    return (
        <div className="flex justify-center bg-gradient-to-t dark:from-violet-300 from-blue-light to-transparent">
            <div className="w-full max-w-max-screen-view grid place-items-center grid-cols-2">
                <div className='py-32'>
                    <Tag 
                        icon={<BsStars />}
                        title='v3.1 released.'
                        titleLink='Learn more'
                        link="#"
                    />
                    
                    <h1
                        data-testid="headerTitle"
                        className='text-5xl font-bold w-[90%] my-6 dark:text-white'
                    >
                        Your data with real-time analytics
                    </h1>
                    <p
                        data-testid="headerSubtitle"
                        className='opacity-50 text-sm mb-6 font-medium dark:text-white dark:opacity-80'
                    >
                        Harness the potential of Big Data Analytics & Cloud Services and become a data-driven organization with Needle tail
                    </p>

                    <div className="flex gap-4">
                        <a 
                            data-testid="headerButtonStartTrial"
                            href=""
                            className='py-2 transition-all duration-300 hover:-translate-y-1 px-6 bg-violet-700 text-white rounded-full text-base'
                        >
                            Start free trial
                        </a>
                        <a 
                            data-testid="headerButtonLearnMore"
                            href=""
                            className='py-2 transition-all duration-300 hover:-translate-y-1 px-6 bg-white text-violet-700 rounded-full text-base'
                        >
                            Learn more
                        </a>
                    </div>
                </div>
                <div className='py-5'>
                    <img
                        data-testid="headerImage" 
                        src={logoHeader}
                        alt="conexão a núvem"
                    />
                </div>
            </div>
        </div>
    )
}