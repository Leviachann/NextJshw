import Head from "next/head";
import Navbar from "./api/navbar";

export default function Account() {
  return (
    <>
      <Head>
        <title>Account</title>
        <meta name="description" content="Account Page of the App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Navbar />
        <h1>Account</h1>
      </div>
    </>
  );
}
