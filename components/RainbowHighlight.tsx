import { FunctionComponent } from 'react';
import { RoughNotation } from 'react-rough-notation';

interface RainbowHighlightProps {
  color: any;
  children: any;
}

const RainbowHighlight: FunctionComponent<RainbowHighlightProps> = ({ color, children }) => {
  const animationDuration = Math.floor(30 * children.length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};

export default RainbowHighlight;
