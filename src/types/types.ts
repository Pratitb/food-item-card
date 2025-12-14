export type BgVariant = 'primary' | 'secondary' | 'neutral'
export type TextVariant = 'white' | 'gray' | 'black'

export interface CardProps {
	imagePath?: string
	altText?: string
	speciality?: string
	name: string
	desc?: string
	rating?: number
	users?: number
	price: string
}
export interface ButtonProps {
	// bgColor?: string
	bgColor?: BgVariant
	leadinIcon?: string
	leadinAltText?: string
	buttonTextColor?: TextVariant
	buttonHoverTextColor?: TextVariant
	buttonName?: string
	trailingIcon?: string
	trailingAltText?: string
}
