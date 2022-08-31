import userData from '@constants/data';
import { FunctionComponent, ReactNode } from 'react';
import { RoughNotationGroup } from 'react-rough-notation';
import RainbowHighlight from './RainbowHighlight';

const Hero: FunctionComponent<any> = () => {
  const colors = ['#F59E0B', '#84CC16', '#10B981', '#3B82F6'];
  const heroTitles: ReactNode[] = [];

  userData.heroTitles.forEach((title, index) => {
    heroTitles.push(
      <RainbowHighlight color={colors[index]}>
        <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">{title}.</h1>
      </RainbowHighlight>
    );
  });

  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>{heroTitles}</RoughNotationGroup>
      </div>
    </div>
  );
};

export default Hero;
