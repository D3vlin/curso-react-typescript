import { RandomFox } from "@/components/randomFox";
import Head from "next/head";

export default function Home() {
  return (
    <div>      
      <Head>
        <title>Course</title>
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello!!</h1>
        <RandomFox />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
