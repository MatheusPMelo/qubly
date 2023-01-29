import { Tag } from "./Tag";
import { FaEye, FaFileCode } from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'
import { TbCloudDataConnection } from 'react-icons/tb'
import clsx from "clsx";

const cardsData = [
    {
        icon: <BsGraphUp color="#1890FF" size={25} />,
        title: "Valuable business insights",
        description: "Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights."
    },
    {
        icon: <FaFileCode color="#F5222D" size={25} />,
        title: "Valuable business insights",
        description: "Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights."
    },
    {
        icon: <TbCloudDataConnection color="#52C41A" size={25} />,
        title: "Valuable business insights",
        description: "Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights."
    },
]

export function WhyQubly() {
    return (
        <section className="container px-4 py-16 mx-auto">
            <div className="flex justify-center pt-20 pb-6">
                <Tag
                    title="Why Qubly"
                    icon={<FaEye />}
                />
            </div>
            <div className="flex flex-col gap-y-6 items-center">
                <h1 className="text-center text-3xl font-bold leading-10">
                    Get actionable insights from Big Data in 3 steps
                </h1>
                <p className="text-center w-4/6 font-normal text-base opacity-40">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <div className="flex justify-between gap-x-4">
                    {cardsData.map((card, i) => (
                        <div key={i} className="flex flex-col align-center justify-center gap-y-4">
                            <div className="grid place-items-center w-full">
                                <span className={clsx("flex justify-center w-fit p-4 rounded-full", [
                                    i === 2 ? "bg-[#F6FFED]" : '',
                                    i === 1 ? "bg-[#FFF1F0]" : '',
                                    i === 0 ? "bg-[#E6F7FF]" : '',
                                ])}>
                                    {card.icon}
                                </span>
                            </div>
                            <h3 className="text-center font-bold leading-6 text-base">{card.title} - {i}</h3>
                            <p className="text-center opacity-40">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}