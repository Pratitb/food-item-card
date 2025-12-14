import type { CardProps } from "../types/types"
import Button from "./Button"

const Card = ({ imagePath, altText, speciality, rating, users, name, desc, price }: CardProps) => (
    <div className="w-full flex flex-col max-w-xs bg-white rounded-lg p-4 shadow-lg">
        <img
            src={imagePath}
            className="rounded-lg max-w-xs"
            alt={altText} />
        {/* row: speciality, rating */}
        <div className="flex justify-between items-center text-xs mt-2">
            {speciality && <p className="capitalize">{speciality}</p>}
            {rating && <div className="flex items-center gap-1">
                <p className="text-amber-600 font-bold text-sm">{rating}</p>
                {users && <p>{`(${users})`}</p>}
            </div>}
        </div>
        {/* row: name, desc */}
        <div className="mt-2 mb-8 flex flex-col flex-1">
            <p className="uppercase font-semibold">{name}</p>
            {desc && <p className="text-sm">{desc}</p>}
        </div>
        {/* row: price and order */}
        <div className="flex items-center gap-6">
            <p className="text-base font-semibold">{price}</p>
            <Button buttonName="buy" buttonTextColor="white" buttonHoverTextColor='gray' bgColor="neutral" />
        </div>
    </div>
)

export default Card