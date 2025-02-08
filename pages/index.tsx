import { RandomFox } from "@/components/randomFox";
import Head from "next/head";

const random = () => Math.floor(Math.random() * 123) + 1

export default function Home() {

  return (
    <div>      
      <Head>
        <title>Course</title>
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello!!</h1>
        <RandomFox image={`https://randomfox.ca/images/${random()}.jpg`} />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
