import { IconBaseProps } from "react-icons/lib"

interface ITag {
    icon?: IconBaseProps | any
    title: string
    link?: string
    titleLink?: string
}

export function Tag({ icon, title, link, titleLink }: ITag) {
    return (
        <span
            data-testid="tagFirstSpan"
            className='flex items-center w-fit text-violet-800 bg-violet-100 rounded-full px-4 py-2 gap-2'
        >
            {icon}
            <span
                data-testid="tagSecondSpan"
                className="font-medium"
            >
                {title} {link && <a data-testid="tagLink" className='underline' href={link}>{titleLink}</a>}
            </span>
        </span>
    )
}