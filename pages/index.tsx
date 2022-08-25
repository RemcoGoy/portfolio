import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ContainerBlock from '../components/ContainerBlock';
// import FavouriteProjects from '../components/FavouriteProjects';
// import LatestCode from '../components/LatestCode';
// import Hero from '../components/Hero';
import { NextPage } from 'next/types';

const Home: NextPage = () => {
  return (
    <ContainerBlock
      title="Manu Arora - Developer, Writer, Creator"
      description="Building a template with Next.js and Tailwindcss - for FreeCodeCamp users."
    >
      {/* <Hero />
      <FavouriteProjects />
      <LatestCode /> */}
      <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
        Hello world!
      </h1>
    </ContainerBlock>
  );
};

export default Home;
