import type { ButtonProps } from "../types/types"

const Button = ({ bgColor = 'neutral', leadinIcon, leadinAltText, buttonTextColor = 'white', buttonHoverTextColor = 'gray', buttonName, trailingIcon, trailingAltText }: ButtonProps) => {

    const colorVariants = {
        primary: 'bg-blue-500',
        secondary: 'bg-green-500',
        neutral: 'bg-gray-800',

        white: {
            base: 'text-white',
            hover: 'group-hover:text-white'
        },
        gray: {
            base: 'text-gray-800',
            hover: 'group-hover:text-gray-800'
        },
        black: {
            base: 'text-black',
            hover: 'group-hover:text-black'
        },
    }

    return (
        // wrap
        <div className={`w-full rounded-lg flex justify-center cursor-pointer group border border-gray-800 hover:bg-white ${colorVariants[bgColor]}`}>
            {leadinIcon && <img src={leadinIcon} alt={leadinAltText} />}
            {buttonName && <p className={`uppercase text-center text-base font-bold px-4 py-2 ${colorVariants[buttonTextColor].base} ${colorVariants[buttonHoverTextColor].hover}`}>{buttonName}</p>}
            {trailingIcon && <img src={trailingIcon} alt={trailingAltText} />}
        </div>

    )
}

export default Button