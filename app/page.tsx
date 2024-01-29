"use client"

import Head from "next/head";
import { useRef } from "react";
import Panel from "@/components/Panel";
import Body from "@/components/Body";
import DummyPanel from "@/components/DummyPanel";
import Gradientdiv from "@/components/GradientDiv";
import dynamic from "next/dynamic";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
  });

  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color='204, 204, 255'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <Head>
          <title>Hamza Siddiqui</title>
          <meta name="description" content="Generated by create next ap"></meta>
          <meta name="viewport" content="width-device-width, initial-scale=1"></meta>
          <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Gradientdiv className="w-full h-screen bg-blue overflow-x-hidden overflow-y-scroll items-center gap-20 justify-between flow-root">
        <Panel aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} skillsRef={skillsRef} />
        <DummyPanel />
        <Body aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} skillsRef={skillsRef} />
      </Gradientdiv>
    </>
  );
}
