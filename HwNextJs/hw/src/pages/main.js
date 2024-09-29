import Head from "next/head";
import Navbar from "./api/navbar";

export default function Main() {
  return (
    <>
      <Head>
        <title>Main</title>
        <meta name="description" content="Main Page of the App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Navbar />
        <h1>Main</h1>
      </div>
    </>
  );
}
