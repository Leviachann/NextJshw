import Head from "next/head";
import Navbar from "./api/navbar";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog Page of the App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Navbar />
        <h1>Blog</h1>
      </div>
    </>
  );
}
