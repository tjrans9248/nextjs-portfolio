import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import LayOut from '../components/layout';
import Hero from '../components/home/hero';
import Animation from '../components/home/animation';

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <LayOut>
      <Head>
        <title>션 포르폴리오</title>
        <meta name="description" content="오늘도 지식을 쌓자" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-column items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </LayOut>
  );
}
