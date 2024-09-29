import Head from "next/head";
import Navbar from "./api/navbar";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Page of the App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Navbar />
        <h1>Contact</h1>
      </div>
    </>
  );
}
