import Head from "next/head";
import tw from "tailwind-styled-components";
import Body from "./components/Body";
import Header from "./components/Header";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Fylo Landing Page</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Header />
      <Body />
    </Wrapper>
  );
}

const Wrapper = tw.div`
  h-full w-full bg-dark-blue-1 text-white-1 flex flex-col
`;
