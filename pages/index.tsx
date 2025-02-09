import { LazyImage } from "@/components/lazyImage";
import { NextPage } from "next";
import Head from "next/head";
import { MouseEventHandler, useState } from "react";

const random = () => Math.floor(Math.random() * 123) + 1

const generateId = () => Math.random().toString(36).substring(2, 9)

export default function Home(): NextPage {
  const [images, setImages] = useState<IImageItem[]>([])

    const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.preventDefault()
      const newImageItem: IImageItem = { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg`}
      setImages([...images, newImageItem])
    }

  return (
    <div>      
      <Head>
        <title>Course</title>
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello!!</h1>
        <button onClick={addNewFox}>Add new Fox</button>
        {
          images.map((image, index) => (
            <div key={index} className="p-4">
              <LazyImage image={image.url} width={160} height="auto" className="rounded-lg bg-gray-300" title="randomFox" onClick={() => console.log("Fox")} />
            </div>
          ))
        }
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
