import person from '../assets/person.png'

export function Feedback() {
    return (
        <section className="bg-gradient-to-t to-pink-light from-blue-light">
            <div className="container mx-auto px-4 py-52 grid place-items-center gap-y-8">
                <h3 className='text-2xl text-center'>"What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process"</h3>
                <img data-testid="personImage" src={person} alt="foto do representente da marca." />
                <span data-testid="personOccupation" className='text-base font-bold'>Guillaume Cabane<br />CTO @ BigSpring</span>

                <div className='w-full h-px bg-slate-300' />
            </div>
        </section>
    )
}