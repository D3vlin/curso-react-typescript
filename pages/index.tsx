import { RandomFox } from "@/components/randomFox";
import { NextPage } from "next";
import Head from "next/head";
import { MouseEventHandler, useState } from "react";

const random = () => Math.floor(Math.random() * 123) + 1

type ImageItem = { id: string, url: string}

const generateId = () => Math.random().toString(36).substring(2, 9)

export default function Home(): NextPage {
  const [images, setImages] = useState<ImageItem[]>([])

    const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.preventDefault()
      const newImageItem: ImageItem = { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg`}
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
              <RandomFox image={image.url} />
            </div>
          ))
        }
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
