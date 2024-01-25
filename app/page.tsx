import Head from "next/head";
import Panel from "@/components/Panel";
import Body from "@/components/Body";
import DummyPanel from "@/components/DummyPanel";

export default function Home() {
  return (
    <>
      <Head>
          <title>Hamza Siddiqui</title>
          <meta name="description" content="Generated by create next ap"></meta>
          <meta name="viewport" content="width-device-width, initial-scale=1"></meta>
          <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className="w-full h-screen bg-blue overflow-x-hidden overflow-y-scroll flex items-center gap-20 justify-between flow-root">
        <Panel />
        <DummyPanel />
        <Body />
      </main>
    </>
  );
}
