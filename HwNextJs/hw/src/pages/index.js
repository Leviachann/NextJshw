import Head from "next/head";
import Navbar from "./api/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page of the homework" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <h1 style={{ fontFamily: 'MotionPicture' }}>Home</h1>
      </div>
    </>
  );
}
