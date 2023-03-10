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
                <h1 className="text-center text-title font-bold leading-10 dark:text-white">
                    Get actionable insights from Big Data in 3 steps
                </h1>
                <p className="text-center w-4/6 font-normal text-base opacity-40 dark:text-white dark:opacity-80">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <div data-testid={`container-card`} className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-4">
                    {cardsData.map((card, i) => (
                        <div data-testid={`item-${i}`} key={i} className="flex flex-col items-center justify-center gap-y-4">
                            <div className="grid place-items-center w-full">
                                <span data-testid={`item-icon-${i}`} className={clsx("flex justify-center w-fit p-4 rounded-full", [
                                    i === 2 ? "bg-[#F6FFED]" : '',
                                    i === 1 ? "bg-[#FFF1F0]" : '',
                                    i === 0 ? "bg-[#E6F7FF]" : '',
                                ])}>
                                    {card.icon}
                                </span>
                            </div>
                            <h3 data-testid={`item-title-${i}`} className="text-center font-bold leading-6 text-base dark:text-white">{card.title}</h3>
                            <p data-testid={`item-text-${i}`} className="text-center opacity-40 md:w-4/5 w-3/4 dark:text-white dark:opacity-80">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}