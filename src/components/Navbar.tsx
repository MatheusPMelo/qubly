import Logo from '../assets/Logo.svg'
import * as Menubar from '@radix-ui/react-menubar';

const navMenuItems = [
    {
        title: 'Lorem',
        url: '#'
    },
    {
        title: 'Lorem',
        url: '#'
    },
    {
        title: 'Lorem',
        url: '#'
    },
    {
        title: 'Lorem',
        url: '#'
    },
]

export function Navbar() {
    return (
        <div className="md:flex md:justify-center hidden">
            <nav className='p-4 flex justify-between items-center container mx-auto px-4'>
                <a href="#">
                    <img src={Logo} alt='Logo' />
                </a>
                <div>
                    <Menubar.Root
                        className='w-full flex gap-10'
                    >
                        <Menubar.Menu>
                            {navMenuItems.map((menuItem, index) => (
                                <Menubar.Trigger
                                    key={index}
                                    className='text-black dark:text-white transition-all duration-300 hover:-translate-y-1 font-medium'
                                >
                                    {menuItem.title}
                                </Menubar.Trigger>
                            ))}
                            <Menubar.Trigger
                                className='border border-violet-800 dark:border-violet-300 py-3 px-6 rounded-full text-violet-900 dark:text-violet-300 text-center text-base font-medium transition-all duration-300 hover:bg-violet-800 hover:text-white'
                            >
                                Start free trial
                            </Menubar.Trigger>
                        </Menubar.Menu>
                    </Menubar.Root>
                </div>
            </nav>
        </div>
    )
}