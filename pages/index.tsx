import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ContainerBlock from '../components/ContainerBlock';
// import FavouriteProjects from '../components/FavouriteProjects';
// import LatestCode from '../components/LatestCode';
// import Hero from '../components/Hero';
import { NextPage } from 'next/types';
import Hero from '@components/Hero';

const Home: NextPage = () => {
  return (
    <ContainerBlock
      title="Remco Goyvaerts - Developer, Engineer, Scientist"
      description="Building a template with Next.js and Tailwindcss - for FreeCodeCamp users."
    >
      {/* <FavouriteProjects />
      <LatestCode /> */}
      <Hero />
    </ContainerBlock>
  );
};

export default Home;
