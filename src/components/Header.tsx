import logoHeader from '../assets/clound-techs.png'
import { BsStars } from 'react-icons/bs'
import { Tag } from './Tag'

export function Header() {
    return (
        <div className="flex justify-center bg-gradient-to-t dark:from-violet-300 from-blue-light to-transparent pb-12 md:pb-px">
            <div className="container px-4 mx-auto grid place-items-center grid-cols-1 md:grid-cols-2">
                <div className='pt-20 md:py-32'>
                    <Tag 
                        icon={<BsStars />}
                        title='v3.1 released.'
                        titleLink='Learn more'
                        link="#"
                    />
                    
                    <h1
                        data-testid="headerTitle"
                        className='text-5xl font-bold w-3/5 md:w-11/12 my-6 dark:text-white'
                    >
                        Your data with real-time analytics
                    </h1>
                    <p
                        data-testid="headerSubtitle"
                        className='opacity-50 text-sm mb-6 font-medium dark:text-white dark:opacity-80'
                    >
                        Harness the potential of Big Data Analytics & Cloud Services and become a data-driven organization with Needle tail
                    </p>

                    <div className="flex gap-4 flex-col md:flex-row">
                        <a 
                            data-testid="headerButtonStartTrial"
                            href=""
                            className='text-center py-2 transition-all duration-300 md:hover:-translate-y-1 px-6 bg-violet-700 text-white rounded-full text-base'
                        >
                            Start free trial
                        </a>
                        <a 
                            data-testid="headerButtonLearnMore"
                            href=""
                            className='text-center py-2 transition-all duration-300 md:hover:-translate-y-1 px-6 bg-white text-violet-700 rounded-full text-base'
                        >
                            Learn more
                        </a>
                    </div>
                </div>
                <div className='py-5 hidden md:block'>
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