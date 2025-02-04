import { JSX } from "react"
// import { FC, FunctionComponent, JSX } from "react"

// export const RandomFox1 = () => {
//     return <img />
// }

const random = () => Math.floor(Math.random() * 123) + 1

export const RandomFox = (): JSX.Element => { // -> Más recomendada hoy en día
    const image: string = `https://randomfox.ca/images/${random()}.jpg`

    return <img src={image} width={320} height="auto" className="rounded-lg" />
}

// export const RandomFox3: FunctionComponent = () => {
//     return <img />
// }

// export const RandomFox4: FC = () => {
//     return <img />
// }