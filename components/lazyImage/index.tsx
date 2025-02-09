import { ImgHTMLAttributes, JSX, useEffect, useRef, useState } from "react"
// import { FC, FunctionComponent, JSX } from "react"

// export const RandomFox1 = () => {
//     return <img />
// }
type LazyImageProps = { image: string }
type ImageNative = ImgHTMLAttributes<HTMLImageElement>
type Props = LazyImageProps & ImageNative

export const LazyImage = ({ image, ...imageProps }: Props): JSX.Element => { // -> Más recomendada hoy en día
    const node = useRef<HTMLImageElement>(null)

    const [src, setSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("Rendering... ", entry.target);
                    setSrc(image)
                }
            })
        })
    
        if (node.current) observer.observe(node.current)

        return () => {
            observer.disconnect()
        }
    }, [image])

    return <img ref={node} src={src} {...imageProps} />
}

// export const RandomFox3: FunctionComponent = () => {
//     return <img />
// }

// export const RandomFox4: FC = () => {
//     return <img />
// }