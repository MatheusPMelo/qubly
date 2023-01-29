import react from '../assets/react.svg'
import accenture from '../assets/accenture.svg'
import airbnb from '../assets/airbnb.svg'
import sky from '../assets/sky.svg'

const trusted = [
    react,
    accenture,
    airbnb,
    sky
]

export function SignUp() {
    return (
        <section className="container mx-auto px-4 py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div className="">
                    <h1 className="text-title font-bold leading-10 md:w-5/6 lg:w-11/12 text-center md:text-start">See why the world’s best companies use Qubly to become truly data-driven.</h1>

                    <div className="hidden md:flex items-center gap-x-7 py-9">
                        <span className="bg-zinc-300 w-1/3 lg:w-1/2 h-px" />
                        <span className="break-normal text-zinc-400">Trusted</span>
                        <span className="bg-zinc-300 w-1/3 lg:w-1/2 h-px" />
                    </div>

                    <div className="grid grid-cols-2 place-items-center gap-16 pb-20 md:pb-0">
                        {trusted.map(trusted => (
                            <div className=''>
                                <img className='' key={trusted} src={trusted} alt="logo parceira" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-pink-light px-7">
                    <form className="bg-white flex flex-col items-center gap-4 -translate-y-11 shadow-md rounded-lg p-10" action="" method="get">
                        <h2 className='font-bold text-title leading-8 text-center'>Sign Up</h2>
                        <span className='text-white bg-violet-700 w-full py-4 text-center rounded-lg'>Start your free trial</span>
                        <input className='border-zinc-400 border p-4 w-full rounded-lg' type="text" placeholder='Your primary email' />
                        <input className='border-zinc-400 border p-4 w-full rounded-lg' type="text" placeholder='Password' />
                        <input className='border-zinc-400 border p-4 w-full rounded-lg' type="text" placeholder='Re-type Password' />
                        <div className='w-11/12 h-px bg-slate-300' />
                        <span className='text-zinc-400'>Already have an account? <a className="text-violet-700" href="#">Login</a></span>
                    </form>
                </div>
            </div>
        </section>
    )
}