import { JSX } from "react"
// import { FC, FunctionComponent, JSX } from "react"

// export const RandomFox1 = () => {
//     return <img />
// }
type Props = { image: string }

export const RandomFox = ({ image }: Props): JSX.Element => { // -> Más recomendada hoy en día
    return <img src={image} width={320} height="auto" className="rounded-lg" />
}

// export const RandomFox3: FunctionComponent = () => {
//     return <img />
// }

// export const RandomFox4: FC = () => {
//     return <img />
// }