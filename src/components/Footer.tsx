import logo from '../assets/Logo.svg'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'

const devMenu = [
    {
        title: "Lorem",
        link: "#"
    },
    {
        title: "Lorem",
        link: "#"
    },
    {
        title: "Lorem",
        link: "#"
    },
    {
        title: "Lorem",
        link: "#"
    },
]

const supportMenu = [
    {
        title: "Lorem",
        link: "#"
    },
    {
        title: "Lorem",
        link: "#"
    },
    {
        title: "Lorem",
        link: "#"
    },
    {
        title: "Lorem",
        link: "#"
    },
    {
        title: "Lorem",
        link: "#"
    },
    {
        title: "Lorem",
        link: "#"
    },
    {
        title: "Lorem",
        link: "#"
    },
]

const midias = [
    <AiFillFacebook size={32} />,
    <AiFillInstagram size={32} />,
    <AiFillTwitterSquare size={32} />
]

export function Footer() {
    return (
        <footer className="bg-blue-light py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto px-4 gap-x-4">
                <div className="flex items-center flex-col justify-start gap-y-4">
                    <div className='w-full'>
                        <img src={logo} alt="" />
                    </div>
                    <div className="w-full">
                        <p className='w-2/3'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim ad minim
                        </p>
                    </div>
                    <div className="grid grid-cols-10 justify-start w-full">
                        {midias.map(media => (
                            <span className='w-8'>{media}</span>
                        ))}
                    </div>

                </div>
                <div className="">
                    <h3 className="font-bold text-base pb-5">For Developers</h3>
                    <ul className="">
                        {devMenu.map((devMenu, i) => (
                            <li className="py-2" key={i}>
                                <a href={devMenu.link}>
                                    {devMenu.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="">
                    <h3 className="font-bold text-base pb-5">Support</h3>
                    <ul className="">
                        {supportMenu.map((supportMenu, i) => (
                            <li className="py-2" key={i}>
                                <a href={supportMenu.link}>
                                    {supportMenu.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}